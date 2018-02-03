import React, { Sty } from "react"
import PropTypes, { element } from "prop-types"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { groupBy, reduce } from 'ramda'
import moment from 'moment'

class Plot extends React.Component {
  state = {
    displayUSD: true,
    displayCLP: true,
  }
  toggleData(attribute) {
    this.setState({ [attribute]: !this.state[attribute] })
  }
  render () {
    let data = [], 
      grouped = groupBy(point => point.timestamp, this.props.data), 
      merge = (accumulated, current) => Object.assign({}, accumulated, current)
    
    let res = Object.keys(grouped).map(key => grouped[key].reduce((acc, point) => 
      Object.assign({}, acc, { [point.currency]: point.currency === "CLP"? point.price / 1000000 : point.currency === "USD"? point.price / 1000 : point.price }), 
      { name: moment(key).format('HH:mm DD/MM/YYYY') }))
      
    return (
      <div style={styles.container}>
        <h3>Precios Bitcoin en diferentes monedas</h3>
        <div>
          <div style={{ display: 'inline', marginRight: 10 }}><input style={styles.inline} type="checkbox" checked={this.state.displayUSD} onChange={ () => this.toggleData('displayUSD') } /> USD</div>
          <div style={styles.inline}><input style={styles.inline} type="checkbox" checked={this.state.displayCLP} onChange={ () => this.toggleData('displayCLP') } /> CLP</div>
        </div>
        <LineChart width={730} height={250} data={res}
          margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {this.state.displayUSD && <Line type="monotone" dataKey="USD" stroke="#82ca9d" />}
          {this.state.displayCLP && <Line type="monotone" dataKey="CLP" stroke="#8884d8" />}
        </LineChart>
        Nota: CLP están en millones, USD están en miles
      </div>
    );
  }
}

let styles = {
  container: { display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  inline: { display: 'inline' },
}

Plot.propTypes = {
  data: PropTypes.array
};
export default Plot
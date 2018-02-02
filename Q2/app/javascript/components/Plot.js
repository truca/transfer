import React from "react"
import PropTypes, { element } from "prop-types"
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { groupBy, reduce } from 'ramda'

class Plot extends React.Component {
  render () {
    let data = [], 
      grouped = groupBy(point => point.timestamp, this.props.data), 
      merge = (accumulated, current) => Object.assign({}, accumulated, current)
    


    let res = Object.keys(grouped).map(key => grouped[key].reduce((acc, point) => Object.assign({}, acc, { [point.currency.toLowerCase()]: point.price }), { name: new Date(key).getTime() }))
      
      
      /*(grouped[key].map( point => ({ [point.currency.toLowerCase()]: point.price }) )).reduce(merge, { name: key } ) )
      .reduce( merge, {} )*/
    
    console.log("res", res)

    return (
      <div>
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="clp" stroke="#8884d8" />
          <Line type="monotone" dataKey="usd" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}

Plot.propTypes = {
  data: PropTypes.array
};
export default Plot

/**
 * <div>Data</div>
        <h3>CLP</h3>
        <ul>
          {this.props.data.CLP.map((clp, i) => <li key={i}>{clp.price}</li>)}
        </ul>
        <h3>USD</h3>
        <ul>
          {this.props.data.USD.map((USD, i) => <li key={i}>{USD.price}</li>)}
        </ul>
 */
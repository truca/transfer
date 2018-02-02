require 'rufus-scheduler'
require 'net/http'

scheduler = Rufus::Scheduler.new

last_update = nil

scheduler.every '5s' do
  url = URI.parse('http://api.coindesk.com/v1/bpi/currentprice/CLP.json')
  req = Net::HTTP::Get.new(url.to_s)
  res = Net::HTTP.start(url.host, url.port) {|http|
    http.request(req)
  }
  r = JSON.parse res.body
  
  if !last_update || last_update != r["time"]["updatedISO"]
    last_update = r["time"]["updatedISO"]
    Price.create(currency: "CLP", timestamp: r["time"]["updatedISO"], price: r["bpi"]["CLP"]["rate_float"])
    Price.create(currency: "USD", timestamp: r["time"]["updatedISO"], price: r["bpi"]["USD"]["rate_float"])
    puts 'Updated prices'
  end
end
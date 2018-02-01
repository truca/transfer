class HomeController < ApplicationController
  def index
    @clp = Price.where('currency = "CLP"')
    @usd = Price.where('currency = "USD"')
  end
end

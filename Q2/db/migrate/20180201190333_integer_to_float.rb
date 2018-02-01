class IntegerToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :prices, :price, :float
  end
end

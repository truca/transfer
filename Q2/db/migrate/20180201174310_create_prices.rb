class CreatePrices < ActiveRecord::Migration[5.1]
  def change
    create_table :prices do |t|
      t.timestamp :timestamp
      t.string :currency
      t.integer :price

      t.timestamps
    end
  end
end

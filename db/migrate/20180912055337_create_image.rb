class CreateImage < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
    	t.timestamps null: false
    end
  end
end

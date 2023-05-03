// components
import InventoryList from "../../components/InventoryList/InventoryList"

// css
import "./Shop.css"

// data
import { inventoryData } from "../../data/data"

// npm modules
import { useState } from "react"

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item])
    setShopInventory(shopInventory.filter((el) => el.id !== item.id))
  }

  const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item])
    setUserInventory(userInventory.filter((el) => el.id !== item.id))
  }

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList
          title="Shop Inventory"
          inventory={shopInventory}
          handleAddItem={handleAddItem}
        />
        <InventoryList 
          title="User Inventory" 
          inventory={userInventory}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  )
}

export default Shop
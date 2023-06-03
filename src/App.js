import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { items } from "./mock";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(() => items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState(null);

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem((showFullItem) => !showFullItem);
  }
  
  const chooseCategory = (category) => {
    if (category === 'All') {
      setCurrentItems(items);
      return;
    }
    const filteredItems = items.filter(el => el.category === category)
    setCurrentItems(filteredItems)
  }

  const deleteOrder = (id) => {
    const filteredOrders = orders.filter(el => el.id !== id)
    setOrders(filteredOrders)
  }
  
  const addToOrder = (item) => {
    let isInArray = false
    orders.forEach(el => { if (el.id === item.id) isInArray = true })
    if(!isInArray) setOrders([...orders, item])
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory}/>
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem} />}
      <Footer />
    </div> 
  )
}

export default App;
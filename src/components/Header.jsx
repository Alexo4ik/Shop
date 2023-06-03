import React, { useState } from 'react';
import {TiShoppingCart} from 'react-icons/ti';
import OrdersList from './OrdersList';

const Header = ({orders, onDelete}) => {
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    {Boolean(orders.length) &&<span className='counter'>{orders.length}</span>}
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Login</li>
                </ul>
        <TiShoppingCart 
            onClick={() => setCartOpen(cartOpen => !cartOpen)} 
            className={`shop-cart-buutton ${cartOpen && 'active'}`} />
        {cartOpen && (
            <div className='shop-cart'>
                {orders.length > 0 ? 
                <OrdersList onDelete={onDelete} orders={orders}/> : (
                    <div className='empty'>
                        <h2>Basket is empty</h2>
                    </div>
                )}
            </div>
        )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
export default Header
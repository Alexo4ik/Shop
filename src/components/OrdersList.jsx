import React from 'react'
import Order from './Order'

const OrdersList = ({orders, onDelete}) => {
    let summa = 0
    orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>
            {orders.map(el => (
                    <Order onDelete={onDelete} key={el.id} item={el} />
                ))}
            <p className='summa'>Summ: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

export default OrdersList
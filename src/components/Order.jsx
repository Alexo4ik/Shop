import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Order = ({item, onDelete}) => {
    return (
        <div className='item'>
            <img alt='' src={"./img/" + item.img} />
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <FaTrashAlt className='delete-icon' onClick={() => onDelete(item.id)} />
        </div>
    )
}

export default Order
import React from 'react'
import { categories } from '../mock.js';

const Categories = ({ chooseCategory }) => {
    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el} onClick={() => chooseCategory(el)}>{el}</div>
            ))}
        </div>
    )
}

export default Categories
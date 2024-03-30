import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const cartItems = useSelector((state) => state.cartItems)
    return (
        <div id="header">

            <div className='container'>
                <div className="header">

                    <h2>Shopy</h2>
                    <Link to='cart' className='cart'>cart <p className='itemsNo'>{cartItems?.length}</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Header

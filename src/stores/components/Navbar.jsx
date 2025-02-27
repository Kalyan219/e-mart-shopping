import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'


const Navbar = () => {
    const {cartItems} = useCart()
  return (
    <div className='nav-section'>
    <div className='navSection'>
        <div className="title">
            <Link to="/" className="custom-link"><h2>E-Mart</h2></Link>
        </div>
        <div className="search">
            <input type='search' placeholder='Search...'/>
        </div>
        <div className="user">
            <div className="user-detail">SignIn/SignUp</div>
            <Link to='/cart' className="custom-link"><div className="cart">
                Cart 
                <span>
                    {cartItems.length}
                </span>
            </div></Link>
        
        </div>
    </div>
    <div className="subMenu">
        <ul>
           <Link to="/mobilePage" className="custom-link"><li>Mobiles</li></Link>
           <Link to="/computerPage" className="custom-link"><li>Computers</li></Link>
           <Link to="/watchesPage" className="custom-link"><li>Watches</li></Link>
           <Link to="/mensPage" className="custom-link"><li>Mens Wear</li></Link>
           <Link to="/womanPage" className="custom-link"><li>Woman Wear</li></Link>
           <Link to="/booksPage" className="custom-link"><li>Books</li></Link>
           <Link to="/furniturePage" className="custom-link"><li>Furniture</li></Link>
           <Link to="/kitchenPage" className="custom-link"><li>Kitchen</li></Link>
           <Link to="/fridgePage" className="custom-link"><li>Fridge</li></Link>
           <Link to="/speakersPage" className="custom-link"><li>Speakers</li></Link>
           <Link to="/acPage" className="custom-link"><li>Ac</li></Link>
           <Link to="/tvPage" className="custom-link"><li>Tv's</li></Link>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
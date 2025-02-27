import React, { useContext } from 'react'

import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'

import { useCart } from '../stores/context/CartContext'
import { booksData } from '../stores/data/books'

const BooksSingle = () => {
    const {id} = useParams()
    const {addToCart, cartItems} = useCart()

    const product = booksData.find((item) => item.id === id)
    const images = product.image
    
  return (
    <>
    <Navbar />
    <div className="ind-section">
        <div className="ind-image">
            <img src={images} alt="books" />
        </div>
        <div className="ind-details">
            <div className="ind-company space">
                <h2>{product.author}</h2>
            </div>
        <div className="ind-model space">
            <h3>{product.title}</h3>
        </div>
        <div className="ind-price space">
            <h2>{product.price}</h2>
        </div>
        <div className="ind-des space">
            <p>{product.description}</p>
        </div>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    </div>
    </>
  )
}

export default BooksSingle
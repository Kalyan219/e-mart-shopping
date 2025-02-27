import React from 'react'
import { menData } from '../stores/data/men'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const MenSingle = () => {
    const {id} = useParams()
    const {addToCart, cartItems} = useCart()

    const product = menData.find((item) => item.id === id)
  return (
    <>
    <Navbar />
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt='' />
        </div>
        <div className="ind-details">
            <div className="ind-company space">
                <h2>{product.brand}</h2>
            </div>
        <div className="ind-model space">
            <h3>{product.model}</h3>
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

export default MenSingle
import React, { useState} from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const BooksPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
        const companyHandler = (selProduct) => {
            if (selectedProduct.includes(selProduct)) {
                setSelectedProduct(selectedProduct.filter(items => items != selProduct))
            } else {
                setSelectedProduct([...selectedProduct,selProduct])
            }
        }
    
        const filteredProduct = selectedProduct.length === 0 ? 
        booksData : booksData.filter((orange) => selectedProduct.includes(orange.author))
  return (
    <>
    <Navbar />
        <div className="full-page">
        <div className="pro-selected">
            {booksData.map((itemProduct) => {
                return (
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox' 
                               checked = {selectedProduct.includes(itemProduct.author)}
                               onChange={() => companyHandler(itemProduct.author)}
                            />
                            {itemProduct.author}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className='pageSection'>
        {filteredProduct.map((item) =>{
            return (
                <div>
                    <Link to={`/booksPage/${item.id}`}>
                    <div className="pageImgBooks">
                        <img src={item.image} alt={item.product} />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.title} {item.author}
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default BooksPage
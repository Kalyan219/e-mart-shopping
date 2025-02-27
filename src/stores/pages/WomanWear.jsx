import React, {useState} from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const WomanWear = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (selProduct) => {
        if (selectedProduct.includes(selProduct)) {
            setSelectedProduct(selectedProduct.filter(items => items != selProduct))
        } else {
            setSelectedProduct([...selectedProduct,selProduct])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
    womanData : womanData.filter((orange) => selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar />
        <div className="full-page">
        <div className="pro-selected">
            {womanData.map((itemProduct) => {
                return (
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox' 
                               checked = {selectedProduct.includes(itemProduct.brand)}
                               onChange={() => companyHandler(itemProduct.brand)}
                            />
                            {itemProduct.brand}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className='pageSection'>
        {filteredProduct.map((item) =>{
            return (
                <div>
                    <Link to={`/womanPage/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt={item.product} />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.brand} {item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default WomanWear
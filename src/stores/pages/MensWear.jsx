import React, {useState} from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const MensWear = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (selProduct) => {
        if (selectedProduct.includes(selProduct)) {
            setSelectedProduct(selectedProduct.filter(items => items != selProduct))
        } else {
            setSelectedProduct([...selectedProduct,selProduct])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
    menData : menData.filter((orange) => selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar />
        <div className="full-page">
        <div className="pro-selected">
            {menData.map((itemProduct) => {
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
                    <Link to={`/mensPage/${item.id}`}>
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

export default MensWear
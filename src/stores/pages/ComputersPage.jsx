import React,{useState} from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ComputersPage = () => {
  
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (selProduct) => {
        if (selectedProduct.includes(selProduct)) {
            setSelectedProduct(selectedProduct.filter(items => items != selProduct))
        } else {
            setSelectedProduct([...selectedProduct,selProduct])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
    computerData : computerData.filter((orange) => selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar />
        <div className="full-page">
        <div className="pro-selected">
            {computerData.map((itemProduct) => {
                return (
                    <div className='pro-input'>
                        <label>
                            <input type='checkbox' 
                               checked = {selectedProduct.includes(itemProduct.company)}
                               onChange={() => companyHandler(itemProduct.company)}
                            />
                            {itemProduct.company}
                        </label>
                    </div>
                )
            })}
        </div>
        <div className='pageSection'>
        {filteredProduct.map((item) =>{
            return (
                <div>
                    <Link to={`/computerPage/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt={item.product} />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.company} {item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default ComputersPage
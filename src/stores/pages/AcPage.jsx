import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'

const AcPage = () => {
  
    const [selectedProduct, setSelectedProduct] = useState([])
    const companyHandler = (selProduct) => {
        if (selectedProduct.includes(selProduct)) {
            setSelectedProduct(selectedProduct.filter(items => items != selProduct))
        } else {
            setSelectedProduct([...selectedProduct,selProduct])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
    acData : acData.filter((orange) => selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar />
        <div className="full-page">
        <div className="pro-selected">
            {acData.map((itemProduct) => {
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
                    <Link to={`/acPage/${item.id}`}>
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

export default AcPage
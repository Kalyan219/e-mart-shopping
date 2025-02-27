import React from 'react'
import { menData} from '../data/men'

const Men = () => {
  const firstFiveImages = menData.slice(0,5)
      return (
      <>
        <div className='proTitle'>
          <h1>Mens Wear</h1>
        </div>
  
        <div className='proSection'>
            {
                firstFiveImages.map((item) => {
                    return (
                        <div className='imgBox'>
                            <img src={item.image} alt="mobile" className='proImage'/>
                        </div>
                    )
                })
            }
        </div>
      </>
      )
}

export default Men
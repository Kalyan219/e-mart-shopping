import React from 'react'
import {furnitureData} from '../data/furniture'

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0,5)
      return (
      <>
        <div className='proTitle'>
          <h1>Furniture</h1>
        </div>
  
        <div className='proSection'>
            {
                firstFiveImages.map((item) => 
                     (
                        <div className='imgBox' key={item.id}>
                            <img src={item.image} alt="mobile" className='proImage'/>
                        </div>
                    )
                )
            }
        </div>
      </>
      )
}

export default Furniture
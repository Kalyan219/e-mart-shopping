import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
    const firstFiveImages = fridgeData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Fridge</h1>
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

export default Fridge
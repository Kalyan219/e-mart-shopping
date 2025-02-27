import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Kitchen</h1>
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

export default Kitchen
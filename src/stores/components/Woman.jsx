import React from 'react'
import { womanData } from '../data/woman'

const Woman = () => {
    const firstFiveImages = womanData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Woman Wear</h1>
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

export default Woman
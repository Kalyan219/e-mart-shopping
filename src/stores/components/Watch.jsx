import React from 'react'
import { watchData } from '../data/watch'

const Watch = () => {
    const firstFiveImages = watchData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Watches</h1>
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

export default Watch
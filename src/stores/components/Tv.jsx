import React from 'react'
import { tvData } from '../data/tv'

const Tv = () => {
    const firstFiveImages = tvData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Tv's</h1>
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

export default Tv
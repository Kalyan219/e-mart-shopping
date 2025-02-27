import React from 'react'
import { speakerData } from '../data/speaker'

const Speakers = () => {
    const firstFiveImages = speakerData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Speakers</h1>
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

export default Speakers
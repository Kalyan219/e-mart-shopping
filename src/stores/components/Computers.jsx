import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
   const firstFiveImages = computerData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Computers</h1>
      </div>

      <div className='proSection'>
          {
              firstFiveImages.map((item) => (
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

export default Computers
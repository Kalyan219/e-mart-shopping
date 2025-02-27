import React from 'react'
import {mobileData} from '../data/mobiles'

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
       <div className='proTitle'>
           <h1>Mobiles</h1>
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

export default Mobiles
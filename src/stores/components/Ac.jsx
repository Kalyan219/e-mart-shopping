import React from 'react'
import { acData} from '../data/ac'

const AC = () => {
  const firstFiveImages = acData.slice(0,5)
      return (
      <>
        <div className='proTitle'>
          <h1>Air Conditioners</h1>
        </div>
  
        <div className='proSection'>
            {
                firstFiveImages.map((item) => 
                    (
                        <div className='imgBox' key={item.id}>
                            <img src={item.image} alt="Ac" className='proImage'/>
                        </div>
                    )
                )
            }
        </div>
      </>
      )
}

export default AC
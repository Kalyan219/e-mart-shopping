import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
    const firstFiveImages = booksData.slice(0,5)
    return (
    <>
      <div className='proTitle'>
        <h1>Books</h1>
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

export default Books
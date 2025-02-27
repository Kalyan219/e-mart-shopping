import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import AC from './AC' 
import Furniture from './Furniture'
import Men from './Men'
import Woman from './Woman'
import Watch from './Watch'
import Kitchen from './Kitchen'
import Books from './Books'
import Fridge from './Fridge'
import Speakers from './Speakers'
import Tv from './Tv'

const Products = () => {
  return (
    <div>
        <Mobiles />
        <Computers />
        <Watch />
        <Men />
        <Woman />
        <Books />
        <Furniture />
        <Kitchen />
        <Fridge />
        <Speakers />
        <AC />
        <Tv />
    </div>
  )
}

export default Products
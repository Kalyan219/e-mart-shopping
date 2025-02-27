import React from 'react'
import {Routes, Route } from 'react-router-dom'

import'./App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchesPage from './stores/pages/WatchesPage'
import MensWear from './stores/pages/MensWear'
import WomanWear from './stores/pages/WomanWear'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import BooksPage from './stores/pages/BooksPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import TvPage from './stores/pages/TvPage'
import AcPage from './stores/pages/AcPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSingle'
import BooksSingle from './singles/BooksSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import WatchSingle from './singles/WatchSingle'
import WomanSingle from './singles/WomanSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage /> } />
        <Route path='/mobilePage' element = {<MobilePage />} />
        <Route path='/computerPage' element = {<ComputersPage />} />
        <Route path='/watchesPage' element = {<WatchesPage/>} />
        <Route path='/mensPage' element = {<MensWear />} />
        <Route path='/womanPage' element = {<WomanWear />} />
        <Route path='/furniturePage' element = {<FurniturePage />} />
        <Route path='/kitchenPage' element = {<KitchenPage />} />
        <Route path='/fridgePage' element = {<FridgePage />} />
        <Route path='/booksPage' element = {<BooksPage />} />
        <Route path='/speakersPage' element = {<SpeakersPage />} />
        <Route path='/tvPage' element = {<TvPage />} />
        <Route path='/acPage' element = {<AcPage />} />
        <Route path='/mobilePage/:id' element={<MobileSingle />} />
        <Route path='/acPage/:id' element={<AcSingle />} />
        <Route path='/computerPage/:id' element={<ComputerSingle />} />
        <Route path='/booksPage/:id' element={<BooksSingle />} />
        <Route path='/fridgePage/:id' element={<FridgeSingle />} />
        <Route path='/furniturePage/:id' element={<FurnitureSingle />} />
        <Route path='/kitchenPage/:id' element={<KitchenSingle />} />
        <Route path='/mensPage/:id' element={<MenSingle />} />
        <Route path='/speakersPage/:id' element={<SpeakerSingle />} />
        <Route path='/tvPage/:id' element={<TvSingle />} />
        <Route path='/watchesPage/:id' element={<WatchSingle />} />
        <Route path='/womanPage/:id' element={<WomanSingle />} />
        <Route path='/cart' element = {<UserCart />} />
      </Routes>
    </div>
  )
}

export default App
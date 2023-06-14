import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentContainer from './components/main/ContentContainer'

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <ContentContainer />
    </div>
  )
}

export default App

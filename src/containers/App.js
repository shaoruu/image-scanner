import React from 'react'

import './App.scss'

import BottomNav from '../components/BottomNav/BottomNav'
import Canvas from '../components/Canvas/Canvas'
import Result from '../components/Result/Result'

function App() {
  const setResult = (image) => {
    console.log(image)
  }

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Canvas setResult={setResult} />
        <Result />
      </div>
      <BottomNav />
    </div>
  )
}

export default App

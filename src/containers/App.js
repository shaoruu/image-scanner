import React, { useState } from 'react'

import './App.scss'

import BottomNav from '../components/BottomNav/BottomNav'
import Canvas from '../components/Canvas/Canvas'
import Result from '../components/Result/Result'

function App() {
  const [image, setImage] = useState('')
  const [result, setResult] = useState(null)

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Canvas image={image} setImage={setImage} setResult={setResult} />
        <Result result={result} />
      </div>
      <BottomNav />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { BounceLoader } from 'react-spinners'

import './App.scss'

import BottomNav from '../components/BottomNav/BottomNav'
import Canvas from '../components/Canvas/Canvas'
import Result from '../components/Result/Result'

function App() {
  const [image, setImage] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Canvas
          image={image}
          setImage={setImage}
          setResult={setResult}
          setLoading={setLoading}
        />
        <Result result={result} />
      </div>
      <BottomNav />
      <div
        className="app-loader"
        style={{
          visibility: loading ? 'visible' : 'hidden',
          opacity: loading ? 1 : 0
        }}
      >
        <BounceLoader size={100} color="white" loading={true} />
      </div>
    </div>
  )
}

export default App

import React, { useEffect, useRef } from 'react'

import Result from '../../core/Result'

import './Result.scss'

export default ({ result }) => {
  const mount = useRef(null)
  const resultRef = useRef(new Result())

  useEffect(() => {
    if (result) resultRef.current.setup(mount.current, result)
  }, [mount, result])

  return (
    <div className="result-wrapper">
      <div className="result-main" ref={mount} />
    </div>
  )
}

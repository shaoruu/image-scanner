import {
  Button,
  Paragraph,
  PlusIcon,
  PrintIcon,
  UploadIcon
} from 'evergreen-ui'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import ImageScanner from '../../core/ImageScanner'

import './Canvas.scss'

const MAX_POINTS = 4

export default ({ image, setImage, setResult }) => {
  const mount = useRef(null)
  const inputRef = useRef(null)
  const scannerRef = useRef(new ImageScanner())
  const [isPinning, setIsPinning] = useState(false)
  const [points, setPoints] = useState([])

  const onImageInput = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()

      reader.onload = function (e) {
        setImage(() => e.target.result)
      }

      reader.readAsDataURL(e.target.files[0])
    }
  }

  const addPoint = useCallback(
    (x, y) => {
      const newPoints = [...points, { x, y }]
      setPoints(() => newPoints)

      if (newPoints.length === MAX_POINTS) {
        setIsPinning(false)
      }
    },
    [points]
  )

  const removePoint = useCallback(
    (index) => {
      const newPoints = [...points]
      newPoints.splice(index, 1)
      setPoints(() => newPoints)
      setIsPinning(true)
    },
    [points]
  )

  useEffect(() => {
    if (!scannerRef.current.enabled && image)
      scannerRef.current.setup(mount.current, image)
  }, [mount, image])

  useEffect(() => {
    scannerRef.current.setAddPoint(addPoint)
  }, [addPoint])

  useEffect(() => {
    scannerRef.current.setRemovePoint(removePoint)
  }, [removePoint])

  useEffect(() => {
    scannerRef.current.setPoints(points)
  }, [points])

  useEffect(() => {
    scannerRef.current.setPinning(isPinning)
  }, [image, isPinning])

  useEffect(() => {
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setIsPinning(false)
    })
  })

  return (
    <div className="canvas-wrapper">
      <div
        className="canvas-main"
        ref={mount}
        onClick={() => {
          if (image) return
          inputRef.current.click()
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          hidden
          onChange={onImageInput}
        />
        {!scannerRef.current.enabled && (
          <>
            <UploadIcon size={100} color="#dbe2ef77" />
            <Paragraph color="#959ba577" textAlign="center" marginTop={10}>
              Click to upload image
            </Paragraph>
          </>
        )}
      </div>
      <div className="canvas-toolbox">
        <Button
          iconAfter={PlusIcon}
          appearance="primary"
          intent="success"
          marginRight={8}
          disabled={!image || points.length === MAX_POINTS}
          height={40}
          onClick={() => setIsPinning(!isPinning)}
        >
          {isPinning && MAX_POINTS !== points.length ? (
            <span>Pinning... ({MAX_POINTS - points.length})</span>
          ) : (
            <span>Pin Points ({MAX_POINTS - points.length})</span>
          )}
        </Button>
        <Button
          appearance="primary"
          intent="danger"
          disabled={points.length !== MAX_POINTS}
          height={40}
          iconAfter={PrintIcon}
          onClick={async () => setResult(await scannerRef.current.project())}
        >
          Flatten
        </Button>
      </div>
    </div>
  )
}

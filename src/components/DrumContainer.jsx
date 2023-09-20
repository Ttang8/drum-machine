import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DrumButton from './DrumButton'
import { soundMap2 } from '../soundMap'

const DrumContainer = props => {
  const [display, setDisplay] = useState('')

  const changeDisplay = (display) => {
    setDisplay(display)
  }

  const handleKeyDown = (e) => {
    // e.preventDefault()
    let upper = e.key.toUpperCase()
    let audioTag = document.getElementById(upper)
    if(audioTag) {
      audioTag.pause()
      audioTag.currentTime = 0
      audioTag.play()
      changeDisplay(audioTag.dataset.name)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, []);
  
  const displayKeys = soundMap2.map((key, idx) => {
    return (
      <li key={idx}>
        <DrumButton name={key.name} src={key.src} keyName={key.keyName} changeDisplay={changeDisplay}/>
      </li>
    )
  })
  
  return (
    <div>
      <div id="drum-machine">
        <div className="container">
          <ul className="key-container">
            {displayKeys}
          </ul>
          <div id="display">
            {display}
          </div>
        </div>
      </div>
    </div>
  )
}

DrumContainer.propTypes = {}

export default DrumContainer
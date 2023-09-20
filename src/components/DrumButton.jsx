import React from 'react'

const DrumButton = ({name, src, keyName, changeDisplay}) => {

  // const audio = new Audio(src)

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.children)
    e.target.children[0].pause()
    e.target.children[0].currentTime = 0
    e.target.children[0].play()
    changeDisplay(name)
  }

  return (
    <div className="drum-pad" id={name} onClick={handleClick}>
      {keyName}
      <audio id={keyName} className="clip" src={src} data-name={name}>
      </audio>
    </div>
  )
}

export default DrumButton
import React from 'react'
import '../Css/CurrentPlayingStyle.css'
import SampleAlbum from '../assets/images/image.png'

export default function CurrentPlaying() {
  return (
    <div className='CurrentPlayingCon'>
      <div className='CurrentPlayingSubCon'>
        <p>No Longer Bound</p>
        <div className='musicInfo'>
          <img src={SampleAlbum} className = "sampleImg"></img>
          <p>No Longer Bound</p>
          <p id = 'Artist'>Forrest</p>
        </div>
        <div className='lyricsCon'>
          <p>Lyrics</p>
          <button>Show lyrics</button>
        </div>
      </div>
    </div>
  )
}

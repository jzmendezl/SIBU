import Hls from 'hls.js/dist/hls.min'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Player = () => {

  // This hook is really important, as it allows us to have dynamic routes
  // and for the component to behave differently depending on the route param
  // in this case, it will allow us to differentiate between song ids
  const { idSong } = useParams()

  // This will obviously change to a petition
  const testSongs = {
    '1': 'https://storage.googleapis.com/soundunder_audio_processed_st/test_djadja',
    '2': 'https://storage.googleapis.com/soundunder_audio_processed_st/test_rickroll',
    '3': 'https://storage.googleapis.com/soundunder_audio_processed_st/test'
  }

  // * This hook really important for React fundamentals, as it allows us
  // * perform certain actions once some desired states change
  // * specified in the dependency array, or (in this case) on the first
  // * load of the component
  useEffect(() => {
    if(Hls.isSupported()) {
      const player = document.getElementById('player')
      const hls = new Hls()

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // TODO: in here we would most likely send info to the analysis ms
        console.log('Song loaded')
      })
      
      hls.loadSource(`${testSongs[idSong]}/outputlist.m3u8`)
      // bind them together
      hls.attachMedia(player)
    }
  }, [])

  // TODO: chek later use of this (most likely on playlists)
  const onEnded = ({ target }) => {
    // for now, it starts the audio again, later, we will most likely use
    // it for song change in playlist (with search params)
    target.currentTime = 0
    target.play()
    console.log('Song ended')
  }

  return(
    <div>
      <h1>Player Test</h1>
      <p>Playing song with id: {idSong}</p>
      <audio 
        id="player"
        controls
        autoPlay
        onEnded={onEnded}
      />
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default Player
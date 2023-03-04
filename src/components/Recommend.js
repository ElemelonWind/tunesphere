import React from 'react'
import { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import SpotifyWebApi from 'spotify-web-api-js';
import { useNavigate } from "react-router-dom";
import SpotifyPlayer from 'react-spotify-web-playback';

export const Recommend = () => {

    const [ started , setStarted ] = useState(false)
    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: "user"
      }
    const webcamRef = React.useRef(null)
    const capture = React.useCallback(
        () => {
        if (webcamRef.current) {
            return webcamRef.current.getScreenshot()
        } else {
            return null
        }
        },
        [webcamRef]
    )

    const navigate = useNavigate()
    const spotifyApi = new SpotifyWebApi()
    const [tracks, setTracks] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false) // show player
    const [token, setToken] = useState(null)

    useEffect(() => {
        console.log("useEffect")
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
        spotifyApi.setAccessToken(token)

        if (!token) {
            navigate("/")
        }
        
      }, [])

    const getTracks = () => {
        spotifyApi.getRecommendations({
            limit: 1,
          seed_genres: ["pop"]
        })
        .then((data) => {
            // console.log(data.tracks.length)
            // if (data.tracks.length <= 1) {
            //     console.log("get tracks")
            //     getTracks()
            // } else {
                let tracks = data.tracks.map((track) => {
                    return track.uri
                })
                console.log(tracks)
                setTracks(tracks)
            // }
        })
        .catch((err) => {
          if (err.status === 401) {
            logout()
            navigate("/")
          }
          else {
            console.log(err)
          }
        })
      }

      const start = () => {
        console.log("start")
        setStarted(true)
        setShowPlayer(false)
        let src;
        var intr = setInterval(function() {
            src = capture()
            if (src) {
                clearInterval(intr);
                console.log(src)
                getTracks()
                setShowPlayer(true)
            }
        }, 1000)
      }

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        spotifyApi.setAccessToken("")
    }
    
  return (
    <div className="container">
        <div className="inner-container">
            { !started ? 
                <>
                    <h2 style={{marginBottom: "20px"}}>Camera Preview</h2>
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={200}
                        videoConstraints={videoConstraints}
                        style={{marginBottom: "20px"}}
                    />
                    <div 
                        className="button-container"
                    >
                        <button 
                            onClick={() => start()}
                            style={{fontSize: "25px", width:"200px"}}
                        >
                            start
                        </button>
                        <a href="/" style={{fontSize: "25px", width:"160px", marginLeft: "20px"}}>home</a>
                    </div>
                </> :
                <>
                { !showPlayer ?
                    <>
                        <Webcam
                            audio={false}
                            height={200}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={200}
                            videoConstraints={videoConstraints}
                            style={{marginBottom: "20px"}}
                        />
                    </> :
                    <>
                    { tracks ? <SpotifyPlayer
                        token={token}
                        uris={tracks}
                        play={true}
                        callback={state => {
                        console.log(state)
                        if (state.progressMs === 0 && state.isPlaying === false && state.status === "READY" && state.isActive === true) {
                            start()
                        }
                        }
                        }
                    /> : null }
                    </>
                }
                <div 
                    className="button-container"
                >
                    <button 
                        onClick={() => setStarted(false)}
                        style={{fontSize: "25px", width:"200px"}}
                    >
                        stop
                    </button>
                </div>
                </>
            }
        </div>
    </div>
  )
}

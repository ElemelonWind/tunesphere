import React from 'react'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';

export const Home = () => {

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPES = [
        "streaming",
        "user-read-email",
        "user-read-private", 
        "user-read-playback-state", 
        "user-modify-playback-state",
        "user-top-read",
        "user-library-read",
        "user-library-modify"
    ];

    const spotifyApi = new SpotifyWebApi();
    const [ name, setName ] = useState(null)
    const [token, setToken] = useState(null);

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
        async function fetchData() {
            await spotifyApi.getMe().then((data) => {
                if (data.display_name && data.display_name !== "")
                    setName(data.display_name)
                else 
                    logout()
            }).catch((err) => {
                logout()
            })
        }
        fetchData()
        
      }, [name])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        spotifyApi.setAccessToken("")
    }

  return (
    <div className="container">
        <div className="inner-container">
            { token ? 
                <h1>Welcome to Tunesphere, <br></br>{name}!</h1> :
                <h1>Welcome to Tunesphere!</h1>
            }
            <h2>music for any mood ♪</h2>
            { token ? 
                <>
                    <div className="button-container">
                        <a href="/about">how it works</a>
                        <a href="/recommend">explore songs</a>
                    </div>
                    <div className="button-container">
                    <a href="/profile">profile</a>
                    <button onClick={logout}>log out</button> 
                </div>
                </> :
                <div className="button-container">
                    <a href="/about">how it works</a>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join("%20")}`}>
                        sign in
                    </a>
                </div>
            }
        </div>
    </div>
  )
}

import React from 'react'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';

export const Profile = ({ setPage }) => {

    const spotifyApi = new SpotifyWebApi()
    const [token, setToken] = useState(null)
    const [profile, setProfile] = useState(null)

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
            setPage(0)
        }

        getProfile()
        
      }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        spotifyApi.setAccessToken("")
        setPage(0)
    }

    const getProfile = () => {
        spotifyApi.getMe()
        .then((data) => {
            console.log(data)
            setProfile(data)
        })
        .catch((err) => {
            if (err.status === 401) {
                logout()
            }
            else {
                console.log(err)
            }
        })
    }
        
  return (
    <div className="container">
        <div className="inner-container">
            <img className="profile-pic" src={profile?.images[0].url} alt="profile pic"></img>
            <h1>{profile?.display_name}</h1>
            <h2>{profile?.email}</h2>
            <h2>{profile?.followers.total} followers</h2>
            <div className="button-container">
                <button onClick={() => {setPage(0)}}>home</button>
                <button onClick={logout}>log out</button>
            </div>
        </div>
    </div>
  )
}

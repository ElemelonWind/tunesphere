import React from 'react'

export const About = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <h2>About</h2>
        <p style={{
          color:"white"
        }}>
          Tunesphere is a web application coded in ReactJS. Our models include a Bidirectional Encoder Representations from Transformers (BERT) NLP model to obtain sentiment from lyrics of songs that we obtain from the Spotify API. We use this to recommend songs with similar sentiment. Our computer vision model is a VGG19 convolutional neural which analyzes sentiment of the user which allows us to determine which of our recommendations the user liked. We coded a backend using flask to run our NLP model and are hosting it on railway. We prepartitioned the spotify song lyrics in order to speed up our recommendation processes.
        </p>
      </div>
    </div>
  )
}

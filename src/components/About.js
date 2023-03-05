import React from 'react'

export const About = () => {
  return (
    <div className="container">
      <div className="inner-container" id="about">
        <h2>About</h2>
        <p>
          Tunesphere is a web application coded in ReactJS, with a goal of taking user videos and Spotify statistics to recommend unique songs and genres that users will actually enjoy.
          Our models include a Bidirectional Encoder Representations from Transformers (BERT) NLP model to obtain sentiment from lyrics of songs that we obtain from the Spotify API. 
          We use this to recommend songs with similar sentiment. 
          Our computer vision model is a VGG19 convolutional neural network which analyzes sentiment of the user and allows us to determine which of our recommendations the user liked. 
          We coded a backend using Flask to run our NLP model and are hosting it on Railway. 
          We prepartitioned the Spotify song lyrics in order to speed up our recommendation processes.
        </p>
        <p>
          We hope you enjoy our application and find new music that you enjoy!
        </p>
        <p>
          ♥ ~ Anish, Cindy & Eric
        </p>
        <div className="button-container">
          <a href="/" style={{
            fontSize: "20px",
            width: "100px"
          }}>home</a>
        </div>
      </div>
    </div>
  )
}

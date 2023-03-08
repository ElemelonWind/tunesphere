# Tunesphere
Discover new beats and broaden your horizons 

[Devpost](https://devpost.com/software/tunesphere)

[Demo](https://youtu.be/-aIfZkRQiyE)
## Inspiration
As high schoolers, music plays a large role in our mental health and maintaining healthy relationships with our peers. It’s a medium for us to share our interests and bond through concerts, shared earbuds, and midnight jam outs. However, we noticed how difficult it was for people who listen to one kind of song to share their interest with others. People tend to form their own listening circles, sometimes leaving others out. Our goal was to create a platform that bridged listening circles through expanding the genres the user listens to by slowly introducing them to new genres. Introducing Tunesphere.
## How did we build it?
Tunesphere is a web application coded in ReactJS. Our models include a Bidirectional Encoder Representations from Transformers (BERT) NLP model to obtain sentiment from lyrics of songs that we obtain from the Spotify API. We use this to recommend songs with similar sentiment. Our computer vision model is a VGG19 convolutional neural which analyzes sentiment of the user which allows us to determine which of our recommendations the user liked. We coded a backend using flask to run our NLP model and are hosting it on railway. We prepartitioned the spotify song lyrics in order to speed up our recommendation processes.
## Challenges we overcame
Incorporating the machine learning models into the React application were at the forefront of our problems. At first, we got errors saying that the model could not be loaded because of a NO-CORS security protocol error. Then, we transitioned our database URL containing the model files to make sure that security protocol would not be needed. Another error with implementing the model with React was that the model could not read in the JSON file due to the wrong path.
## Languages/Frameworks
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=yellow)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&logoColor=white&color=red)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=CSS3&logoColor=white&color=blue)
![](https://img.shields.io/badge/Code-Python-informational?style=flat&logo=Python&logoColor=white&color=green)
![](https://img.shields.io/badge/Code-Jupyter-informational?style=flat&logo=Jupyter&logoColor=white&color=orange)
<br>

![](https://img.shields.io/badge/Code-TensorFlow-informational?style=flat&logo=TensorFlow&logoColor=white&color=orange)
![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=React&logoColor=white&color=blue)
## What's next for Tunesphere?
Research has shown that performing sentiment analysis on video is extremely difficult, so we aim to explore deeper neural networks to better predict emotion from a user’s video.

Furthermore, in case a user would not like their video to be used, we will have them take a short quiz upon launching the application and based on that quiz and their history of liked songs we will recommend songs from different genres that they are most likely to like. We would also look on expanding our model to work on music on different languages and build a social network where you can share with your friends the music you listen to.
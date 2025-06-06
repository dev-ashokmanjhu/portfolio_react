import meetup from "../assets/meetup.png";
import live from "../assets/livestream.png";
import disney from "../assets/disneyclone.jpg";
import youtube from "../assets/youtube.png";
import smartbrain from "../assets/smartbrain.png";
import guessmynumber from "../assets/guessmynumber.png";
import diceroll from "../assets/diceroll.png";
import robofriends from "../assets/project.jpg";
import movieWeb from "../assets/project1.jpg";
import bgPicker from "../assets/project2.jpg";

export const projects = [
  {
    id: 1,
    title: "Meetup App",
    description: "With this app, users can add new meetup places, view existing meetup places, and RSVP to events. The app features a clean and user-friendly interface, making it easy for users to navigate and find the information they need.",
    image: meetup,
    technologies: ["React", "Redux", "Node.js", "MongoDb", "Vercel"],
    demoUrl: "https://meetup-react-project.vercel.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/meetup-app-frontend"
  },
  {
    id: 2,
    title: "Live Streaming Website",
    description: "With this app, users can watch live cricket networks. In this, I use React JS and Material UI for Styling. It is only for learning purposes, not for commercial use.",
    image: live,
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://livecric133.netlify.app/",
  },
  {
    id: 3,
    title: "Disney Plus Website Clone",
    description: "Disney Plus Hotstar Clone with React, Styled Components, Firebase Authentication (Google OAuth), Firestore Database, Redux State Management, React Hooks, Slick Carousel, and more.",
    image: disney,
    technologies: ["React", "Redux", "Firebase", "Styled Components"],
    demoUrl: "https://disneyplushotstar-clone-by-ashok.netlify.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/disney-plus-clone"
  },
  {
    id: 4,
    title: "YouTube Clone",
    description: "A YouTube clone with video upload, search, and recommendation features.",
    image: youtube,
    technologies: ["React", "Redux", "RapidAPI"],
    demoUrl: "https://youtube-ashokmanjhu.netlify.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/youtube-clone"
  },
  {
    id: 5,
    title: "SmartBrain Face Detection",
    description: "AI-powered face detection app using Clarifai API with user authentication.",
    image: smartbrain,
    technologies: ["React", "Node.js", "PostgreSQL", "Clarifai API"],
    demoUrl: "https://smartbrainreactapp.netlify.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/smartbrain-frontend"
  },
  {
    id: 6,
    title: "Dice Roll PIG Game",
    description: "Dice roll pig game is a JavaScript-based game where I implement logic such as functions, conditions, decision making, and DOM manipulation. It provides a great understanding of DOM manipulation.",
    image: diceroll,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://dice-roll-pig-game.vercel.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/dice-roll-pig-game"
  },
  {
    id: 7,
    title: "Guess My Number",
    description: "This is a game based on DOM manipulation. It gives a solid understanding of manipulating HTML elements and classes. The game involves guessing a number and getting feedback on the choice.",
    image: guessmynumber,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://guessmynumberbyashokmanjhu.netlify.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/guess-my-number"
  },
  {
    id: 8,
    title: "Robofriends React App",
    description: "The Robofriends app is made with React, where I implemented all my React basics, such as search logic, API integration, props, functions, state, and more.",
    image: robofriends,
    technologies: ["React", "CSS Modules"],
    demoUrl: "https://robofriend-app.vercel.app/",
    githubUrl: "https://github.com/dev-ashokmanjhu/robofriend-app"
  },
  {
    id: 9,
    title: "Movie Website",
    description: "This version of the movie website is built with HTML, CSS, and JS, providing an improved UI and functionality for educational purposes.",
    image: movieWeb,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://html-css-js-movies-website.vercel.app/",
  }
]; 
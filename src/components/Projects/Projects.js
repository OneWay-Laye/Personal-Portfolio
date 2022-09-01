import './Projects.scss'

function Projects() {
  let projects = [
      {
        name: "Neon Tic Tac Toe",
        webLink: 'https://oneway-laye.github.io/Tic-Tac-Toe-client/',
        repoLink: 'https://github.com/OneWay-Laye/Tic-Tac-Toe-client',
        pictureLink: 'https://i.imgur.com/krz5kbV.png',
        comments: 'This was my first project. I created a Javascript based two player Tic-Tac-Toe game where the user must have an account to play. This also allowed me to get my feet wet with jQuery to show and hide items and to target certian elements in the document.',
        toolsUsed: 'Javascript, Jquery, and CSS'
      },
      {
        name: "Budget Tracker",
        webLink: 'https://oneway-laye.github.io/Budget-Tracker-Frontend/',
        repoLink: 'https://github.com/OneWay-Laye/Budget-Tracker-Frontend',
        pictureLink: 'https://i.imgur.com/mMqHLDK.png',
        comments: 'The Budget Tracker was my second project created. In this project Created both the client side and the backend API. The User would log each expense they had, they could also update and delete the expense aswell. I used CSS Grid for the layout but Didnt quite understand it, looking back I should have used flexbox.',
        toolsUsed: 'FrontEnd: Javascript, jQuery, Css BackEnd: Express, MongoDB and Mongoose'
      },
      {
        name: "ECommerce Store - Donuts R Us",
        webLink: 'https://dom-inators.github.io/ecommerce-frontend-client/',
        repoLink: 'https://github.com/DOM-inators/ecommerce-frontend-client',
        pictureLink: 'https://i.imgur.com/jOyr2Lw.png',
        comments: 'Donuts R Us a group project I was apart of. It was our take on an ecommerce store that only sold donuts. This was my first project working with react and bootstrap. It was different working on a team for the first time just beacause the first day or so we would erase each others work and then have to figure out what we were doing. This taught us alot about making new branches and working and commiting on our branches.',
        toolsUsed: 'Javascript, React, CSS/Sass, Bootstrap, MongoDB, Mongoose, Express, Stripe, and Axios'
      }
    ]
  let projectsJsx = projects.map(project => (
    <div className="projectCard">
      <img src={project.pictureLink}/>
      <h4>{project.name}</h4>
      <p>{project.comments}</p>
      <p>In this project I used {project.toolsUsed}.</p>
      <button><a href={project.webLink}>Website Link</a></button>
      <button><a href={project.repoLink}>Repo Link</a></button>
    </div>
  ))



  return(
    <div id="projectSection">
      <h2>View My Projects</h2>
      <div id="cardHolder">{projectsJsx}</div>

    </div>
  )
}

export default Projects

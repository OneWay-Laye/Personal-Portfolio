import './Projects.scss'

function Projects() {
  let projects = [
      {
        name: "Neon Tic Tac Toe",
        webLink: 'https://oneway-laye.github.io/Tic-Tac-Toe-client/',
        repoLink: 'https://github.com/OneWay-Laye/Tic-Tac-Toe-client',
        pictureLink: 'https://i.imgur.com/krz5kbV.png'
      },
      {
        name: "Budget Tracker",
        webLink: 'https://oneway-laye.github.io/Budget-Tracker-Frontend/',
        repoLink: 'https://github.com/OneWay-Laye/Budget-Tracker-Frontend',
        pictureLink: 'https://i.imgur.com/mMqHLDK.png'
      },
      {
        name: "ECommerce Store - Donuts R Us",
        webLink: 'https://dom-inators.github.io/ecommerce-frontend-client/',
        repoLink: 'https://github.com/DOM-inators/ecommerce-frontend-client',
        pictureLink: 'https://i.imgur.com/jOyr2Lw.png'
      }
    ]
  let projectsJsx = projects.map(project => (
    <div className="projectCard">
      <img src={project.pictureLink}/>
      <h4>{project.name}</h4>
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

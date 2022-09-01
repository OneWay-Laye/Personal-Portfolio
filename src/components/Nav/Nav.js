import { HashLink as Link } from 'react-router-hash-link'

// import styles
import './Nav.scss'

function Nav() {
  return(
    <div id='mainNav'>
      <ul>
        <li><a href='#heroDiv'>Home</a></li>
        <li><a href='#aboutMe'>About Me</a></li>
        <li><a href='#projectSection'>Projects</a></li>
        <li><a href='#contactContainer'>Contact Me</a></li>
      </ul>
    </div>
  )
}


export default Nav

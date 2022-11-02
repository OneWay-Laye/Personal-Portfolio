import './ContactMe.scss'
import { useState} from "react"

function ContactMe() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')

  return(
    <div id="contactContainer">
      <section id="contactCard">
      <h2>Connect With Me!</h2>
        <form id='contactForm'>
          <label>First name</label>
          <input
            placeholder="Enter your first name"
            value={firstName}
            onChange= {(e) => setFirstName(e.target.value)}
          />

          <label>Last name</label>
          <input
            placeholder="Enter your last name"
            value={lastName}
            onChange = {(e) => setLastName(e.target.value)}
          />

          <label>Email</label>
          <input
            type='email'
            placeholder="Enter your email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
          />

          <label>Message</label>
          <input
            placeholder="Enter the message"
            value={message}
            onChange = {(e) => setMessage(e.target.value)}
          />
          <button>Send Message</button>
        </form>
      </section>
      <section id='contactSocial'>
        <h3>Follow me!</h3>
        <div>
          <a href='https://www.linkedin.com/in/alaye-taylor/'>
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png" />
            <p>Alaye Taylor</p>
          </a>
          <a href='https://twitter.com/A1_Codes'>
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-1024.png" />
            <p>@A1_Codes</p>
          </a>
          <a href='https://www.instagram.com/a1_codes/'>
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-1024.png" />
            <p>@a1_codes</p>
          </a>
          <a href='https://github.com/OneWay-Laye'>
            <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-1024.png" />
            <p>@OneWay-Laye</p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactMe

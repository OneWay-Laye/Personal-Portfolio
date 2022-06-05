import './ContactMe.scss'

function ContactMe() {
  return(
    <div id="contactContainer">
      <section id="contactCard">
        <form id='contactForm'>
          <label>First name</label>
          <input
            placeholder="Enter your first name"
          />

          <label>Last name</label>
          <input
            placeholder="Enter your last name"
          />

          <label>Email</label>
          <input
            type='email'
            placeholder="Enter your email"
          />
          
          <label>Message</label>
          <input
            placeholder="Enter the message"
          />

          <button>Send Message</button>
        </form>
      </section>
      <section id='contactSocial'>

      </section>
    </div>
  )
}

export default ContactMe

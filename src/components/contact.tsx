import * as React from "react"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="title">
          <h2>#4. Contact</h2>
        </div>
        <div className="content">
          <div>
            <p>Hi there!</p>
            <p>I am currently not open for work. </p>
            <p>But, I am very happy to connect with new friends.</p>
          </div>

          <div>
            <form
              action="mailto:hoang.vx@outlook.jp"
              method="POST"
              encType="text/plain"
            >
              <textarea name="message" id="contact-message" rows={6}></textarea>
              <input type="submit" value="Send me a message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;

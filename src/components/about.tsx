import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="about">
      <div className="wrap">
        <div className="title">
          <h2>#1. About Me</h2>
        </div>

        <div className="content">
          <div className="left">
            <p>
              Hi, I am Vo Xuan Hoang.
            </p>
            <p>
              I have been working on <span>web development</span> for five years, in a agile (scrum) team, 
              with several of languages like <span>ruby, python, nodejs, javascripts, html, ect...</span>
            </p>
            <p>
              Not only frontend and backend development, I also have a deep understanding about cloud computing like <span>AWS</span>
            </p>
            <p>
              Lastly, I am a <span>quick learner</span> and I love to learn new things.
            </p>
          </div>
          <div className="right">
            <StaticImage src="../images/profile.png" alt="profile" width={150} height={150} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

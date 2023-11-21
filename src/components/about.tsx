import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section id="about" className="about">
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
              I have been working on <span>web development</span> for over 8 years, experience in both waterfall and agile (scrum) team, 
              with several of languages like <span>ruby, python, nodejs, javascripts, html, cobol, ect...</span>
            </p>
            <p>
              Not only frontend and backend development, I also have a deep understanding about cloud computing like <span>AWS</span>
            </p>
            <p>
              Lately, I've been working on some <span>legacy</span> migration projects. Migrate from cobol mainframe to open cloud platform like <span>GCP, AWS</span>
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

import * as React from "react"

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="wrap">
        <div className="title">
          <h2>#2. Experience</h2>
        </div>

        <div className="content">
          <div>
            <h2>## Fullstack Engineer <span>@ IDOM Inc.</span></h2>
            <h4>**Japan, Tokyo**</h4>
            <h5>&gt; October 2016 - Present</h5>
            <ul>
              <li>
                <p>
                  Work on <span>scrum</span> development team as <span>scrum master</span> and <span>development team member</span>.
                </p>
              </li>
              <li>
                <p>
                  Work on an <span>AI</span> project written in Python. 
                  Starting from learning the basics of how AI works, finally bringing the project into production to help reduce business operating costs.
                </p>
              </li>
              <li>
                <p>
                  Designed infrastructure on AWS and implemented <span>CICD</span> on several projects to help improve development workflows and bring ideas to production at high speed.
                </p>
              </li>
              <li>
                <p>
                  Experienced with high-end technology, services likes <span>docker, k8s, AWS Lambda, AWS EKS, AWS ECS, ...</span>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2>## Software Engineering <span>@ FPT Software.</span></h2>
            <h4>**Vietnam, Da Nang**</h4>
            <h5>&gt; October 2014 - October 2015</h5>
            <ul>
              <li>
                <p>
                  Working on an innovative project written in C#. help give the old business a new look and a new experience for its users.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

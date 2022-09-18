import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Work = () => {
  return (
    <section className="work">
      <div className="wrap">
        <div className="title">
          <h2>#3. What I've Maked</h2>
        </div>

        <div className="content">
          <div>
            <div className="gallery">
              <StaticImage src="../images/nasa.jpg" alt="nano" />
            </div>
            <div className="desc">
              <h2>## AI API <span>@ IDOM Inc.</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
            </div>
          </div>
          <div>
            <div className="gallery">
              <StaticImage src="../images/nasa.jpg" alt="nano" />
            </div>
            <div className="desc">
              <h2>## AI API <span>@ IDOM Inc.</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
            </div>
          </div>
          <div>
            <div className="gallery">
              <StaticImage src="../images/nasa.jpg" alt="nano" />
            </div>
            <div className="desc">
              <h2>## AI API <span>@ IDOM Inc.</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work

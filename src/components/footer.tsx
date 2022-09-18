import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <div>
          <span className="copyright">Copyright © 2022 | Vo Xuan Hoang</span>
          <a href="#branch">
            <StaticImage src="../images/git.png" alt="git branch" />
            <span>main</span>
          </a>
        </div>
        <div>
          <a href="https://github.com/hoangvx">
            <StaticImage src="../images/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/hoang-vo-xuan-67a86a124/">
            <StaticImage src="../images/linkin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer;

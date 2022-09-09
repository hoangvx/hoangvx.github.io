import * as React from "react"

const Header = () => {
  return (
    <nav>
      <div>
        <a href="/" className="logo">H</a>

        <div className="menu">
          <a href="#" className="menu-item">#1. About Me</a>
          <a href="#" className="menu-item">#2. Experience</a>
          <a href="#" className="menu-item">#3. Works</a>
          <a href="#" className="menu-item">#4. Contact</a>
          <a href="#" className="menu-item menu-btn">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default Header

import * as React from "react"

const Header = () => {
  const iconSize = 40;

  return (
    <nav id="header">
      <div>
        <a href="/" className="logo">
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9L9 2H15L22 9V15L15 22H9L2 15V9Z" stroke="#9FE5FB"/>
            <path d="M14.8041 5.345C15.2141 5.615 15.5341 5.97 15.7641 6.41C15.9941 6.84 16.1091 7.275 16.1091 7.715C16.1091 8.415 15.8791 9.255 15.4191 10.235L12.0741 17.48L7.67906 7.025L9.04406 6.32L12.5091 14.885L14.3091 11.12C14.5191 10.59 14.6741 10.18 14.7741 9.89C14.8741 9.6 14.9241 9.315 14.9241 9.035C14.9241 8.135 14.4741 7.345 13.5741 6.665L14.8041 5.345Z" fill="#9FE5FB"/>
          </svg>
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9L9 2H15L22 9V15L15 22H9L2 15V9Z" stroke="#9FE5FB"/>
            <path d="M14.8107 17.315L11.7807 12.74C11.3907 13.71 11.0257 14.51 10.6857 15.14C10.3557 15.76 9.95568 16.28 9.48568 16.7C9.02568 17.11 8.48568 17.315 7.86568 17.315L8.30068 15.5C8.32068 15.51 8.34568 15.52 8.37568 15.53C8.40568 15.53 8.42568 15.53 8.43568 15.53C9.06568 15.53 9.60068 15.245 10.0407 14.675C10.4907 14.095 10.9507 13.265 11.4207 12.185L7.92568 6.875L9.27568 6.35L12.0657 10.595C12.4357 9.695 12.7857 8.945 13.1157 8.345C13.4557 7.745 13.8507 7.255 14.3007 6.875C14.7607 6.485 15.2907 6.29 15.8907 6.29L15.4557 8.105L15.3057 8.09C14.6957 8.09 14.1707 8.355 13.7307 8.885C13.3007 9.415 12.8707 10.175 12.4407 11.165L16.1607 16.805L14.8107 17.315Z" fill="#9FE5FB"/>
          </svg>
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9L9 2H15L22 9V15L15 22H9L2 15V9Z" stroke="#9FE5FB"/>
            <path d="M14.1885 6.59V11.96H9.97348V6.05L8.56348 6.59V11.96H7.78348L7.34848 12.845H8.56348V17.21L9.97348 16.7V12.845H14.1885V17.21L15.5835 16.7V6.05L14.1885 6.59Z" fill="#9FE5FB"/>
          </svg>
        </a>

        <div className="menu">
          <a href="#about" className="menu-item">#1. About Me</a>
          <a href="#experience" className="menu-item">#2. Experience</a>
          <a href="#work" className="menu-item">#3. Works</a>
          <a href="#contact" className="menu-item">#4. Contact</a>
          <a download href={'/hoangvx.resume.pdf'} className="menu-item menu-btn">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default Header

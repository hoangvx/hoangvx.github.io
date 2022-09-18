import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/header"
import Top from "../components/top"
import About from "../components/about"
import Experience from "../components/experience"
import Work from "../components/work"
import Splash from "../components/splash"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      { isLoading && (
        <Splash />
      ) }
      { !isLoading && (
        <>
          <Header/>
          <Top/>
          <About/>
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Vo Xuan Hoang</title>

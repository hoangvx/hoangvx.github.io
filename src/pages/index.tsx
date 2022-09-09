import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from "../components/header"
import Top from "../components/top"

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Top />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

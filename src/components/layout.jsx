import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Menu from "./menu"
import layoutStyles from "./layout.module.css"
const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const headerLink = (
    <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      {title}
    </Link>
  )
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        {headerLink}
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0, 
        }}
      >
        {headerLink}
      </h3>
    )
  }
  return (
    <div
      className={layoutStyles.container}
    >
      <header>
        <nav>
          <Menu />
        </nav>
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        <a href="https://www.hassaninia.com">&nbsp;Hassaninia</a>
      </footer>
    </div>
  )
}

export default Layout

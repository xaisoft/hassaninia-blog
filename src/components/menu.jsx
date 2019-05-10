import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li style={{ border: "1px solid purple", padding: "10px" }}>
          <Link
            to="/"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ border: "1px solid purple", padding: "10px" }}>
          <Link
            to="/"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu

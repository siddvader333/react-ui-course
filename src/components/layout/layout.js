import React from "react"
import "./layout.css"
import { GlobalStyles } from "../styles/GlobalStyles"

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout

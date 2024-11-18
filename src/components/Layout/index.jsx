import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import './style.scss'

const Layout = ({ children}) => (
    <>
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
    </>
);

export default Layout

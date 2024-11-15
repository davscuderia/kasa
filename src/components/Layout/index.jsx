import Header from "../Header"
import Footer from "../Footer"


const Layout = ({ children}) => (
    <>
    <Header />
    <main className="main-container">{children}</main>
    <Footer />
    </>
);

export default Layout

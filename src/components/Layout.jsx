import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children}) => (
    <>
    <Header />
    <main>{children}</main> {/* mettre le contenu des pages */}
    <Footer />
    </>
);

export default Layout;

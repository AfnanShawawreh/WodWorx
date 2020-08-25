import Nav from "./Nav";

const Layout = ({  children }) => (
    <div>
        <Nav />
       
        <hr />
        {children}
        <hr />
      
    </div>
);

export default Layout;
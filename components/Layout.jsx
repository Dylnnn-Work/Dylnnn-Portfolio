import { useRouter } from "next/dist/client/router";
import NavBar from "./NavBar";

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
            
        </div>
    )
}

export default Layout;
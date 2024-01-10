import { Outlet } from "react-router-dom";
import Navigation from "../Shared/NavigationBar/Navigation";

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            
        </div>
    );
};

export default LoginLayout;
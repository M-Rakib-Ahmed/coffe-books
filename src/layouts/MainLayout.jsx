import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
        {/* Daynamic Section */}
        <div className="min-h-[calc(100vh-270px)] w-11/12  mx-auto px-12">
            <Outlet></Outlet>
        </div>
        {/* Footer */}
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;
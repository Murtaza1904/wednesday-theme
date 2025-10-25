import { Outlet } from "react-router-dom";

// Importing components
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";

// Importing CSS files
import "../../css/theme.css";

//Importing icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";

export default function DashboardLayout() {
    const [sidebarHidden, setSidebarHidden] = useState(false);

    return (
        <>
            <Sidebar hidden={sidebarHidden} />
            <div className="wrapper d-flex flex-column min-vh-100">
                <Header toggleSidebar={() => setSidebarHidden((prev) => !prev)} />
                <div className="body flex-grow-1">
                    <div className="container-lg px-4">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import AdminDashboard from "../pages/Admin/AdminDashboard";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "about",
                element : <About/>,
            },
            {
                path : "contact",
                element : <App/>,
            },
        ],
    },
    {
        path : "/admin",
        element : <App/>,
        children : [
            {
                path : "dashboard",
                element : <AdminDashboard/>,
            },
            {
                path : "contact",
                element : <App/>,
            },
        ],
    },
    
    {
        path : "/login",
        element : <App/>,
    },
    {
        path : "/register",
        element : <App/>,
    },
])
export default router;
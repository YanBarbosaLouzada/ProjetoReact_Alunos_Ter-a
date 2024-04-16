import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import AnimePage from "./Pages/AnimePage/AnimePage";
import Layout from "./Pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/anime",
                element: <AnimePage></AnimePage>
            },

        ], errorElement: <ErrorPage></ErrorPage>
    }
])
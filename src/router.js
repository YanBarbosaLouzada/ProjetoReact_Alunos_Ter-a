import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import AnimePage from "./Pages/AnimePage/AnimePage";
import Layout from "./Pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import FavoritoPage from "./Pages/FavoritoPage/FavoritoPage";

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
            {
                path: "/favorito",
                element: <FavoritoPage></FavoritoPage>,
                loader: async () => {
                    return fetch('https://api.jikan.moe/v4/anime?q=naruto')
                }
            }

        ], errorElement: <ErrorPage></ErrorPage>
    }
])
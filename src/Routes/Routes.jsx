import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader:()=>fetch('https://the-news-dragon-server-mdzisan.vercel.app/news')
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({params})=>fetch(`https://the-news-dragon-server-mdzisan.vercel.app/category/${params.id}`)
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children:[
        {
            path:":id",
            element:<News></News>,
            loader:({params})=>fetch(`https://the-news-dragon-server-mdzisan.vercel.app/news/${params.id}`)
        }

    ]
  },
]);

export default router;

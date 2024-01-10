import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Categoris from "../pages/Home/Categoris/Categoris";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Categoris></Categoris>,
        loader:({params})=> fetch(`http://localhost:5000/categoris/${params.id}`)
      },
    ],
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<News></News>,
      }
    ]
  }
]);

export default router;

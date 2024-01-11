import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categoris from "../pages/Home/Categoris/Categoris";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";

import Register from "../pages/Login/Register";
import Login from "../pages/Login/Logins/Login";
import PrivetRoute from "./PrivetRoute";
import Trams from "../Shared/Trams/Trams";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/trams',
        element:<Trams/>
      }
    ]

  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
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
        element:<PrivetRoute><News></News></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5000/news/${ params.id}`)
      }
    ]
  }
]);

export default router;

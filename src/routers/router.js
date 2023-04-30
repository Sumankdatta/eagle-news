import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category/Category";
import News from "../Pages/News/News/News";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import TermsAndCondition from "../Pages/Other/TremsAndCondition/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

export const route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/resetpassword',
                element:<ResetPassword></ResetPassword>
            },
            {
                path:'/terms',
                element:<TermsAndCondition></TermsAndCondition>
            },
        ]
    }
])
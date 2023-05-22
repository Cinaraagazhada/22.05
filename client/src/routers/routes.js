import Home from "../Companents/Pages/Home/Home";
import AboutUs from"../Companents/Pages/AboutUs/AboutUs";
import Servive from "../Companents/Pages/Service/Service";
import Contact from "../Companents/Pages/Contact/Contact";
import Team from "../Companents/Pages/Team/Team";
import Price from "../Companents/Pages/Price/Price";
import Blog from "../Companents/Pages/Blog/Blog";
import Page from "../Companents/Pages/Page/Pages";
import MainRoot from "../Companents/Pages/MainRoot"




export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/service',
                element: <Servive/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/team',
                element: <Team/>
            },
            {
                path:'/price',
                element: <Price/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/pages',
                element: <Page/>
            }
        ]
    }
]
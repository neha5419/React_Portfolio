
import Header from "./components/Header"
          import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import HomeLayout from "./components/HomeLayout";
function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
      {
        index:true,
        element:<Hero/>,
        
      },{
        path:"/projects",
        element:<Projects/>
      },{
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      }
    ]
  }
])
  return (
    <>
      
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App

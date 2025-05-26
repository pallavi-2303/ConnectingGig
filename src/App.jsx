import { useState } from 'react'
import Navbar from './components/ui/shared/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/ui/shared/login'
import SignUp from './components/ui/shared/signup'
import HomePage from './pages/home-page'
import DiscoverPage from './pages/discover-page'
import CategoriesPage from './pages/categories'
import LocalGig from './pages/local-gig'


function App() {
 const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/discover",
    element:<DiscoverPage/>
  },
   {
    path:"/categories",
    element:<CategoriesPage/>
  },
   {
    path:"/local-gig",
    element:<LocalGig/>
  },
 ])

  return (
    <>
 <RouterProvider router={appRouter} />
    </>
  )
}

export default App

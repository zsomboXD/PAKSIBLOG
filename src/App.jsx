
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { AddEditPost } from './pages/AddEditPost'
import { PwReset } from './pages/PwReset'
import { Admin } from './pages/Admin'
import {Header} from './components/Header'
import { NotFound } from './pages/NotFound'
import { Posts } from './pages/Posts'
import { Auth } from './pages/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyProfile } from './pages/MyProfile'
import { DeleteAccount } from './pages/DeleteAccount'
import { Detail } from './pages/Detail'

const router=createBrowserRouter([
  {element:<Header/>,
    children:[
      {path:'/',element:<Home />},
      {path:'/posts',element:<Posts />},
      {path:'/create',element:<AddEditPost/>},
      {path:'/update/:id',element:<AddEditPost/>},
      {path:'/detail/:id',element:<Detail/>},
      {path:'/auth/in',element:<Auth />},
      {path:'/auth/up',element:<Auth />},
      {path:'/pwreset',element:<PwReset />},
      {path:'/profile',element:<MyProfile />},
      {path:'/deleteAccount',element:<DeleteAccount />},
      {path:'/admin',element:<Admin />},
      {path:'*',element:<NotFound />},
    ]
  }
],
{
  future: {
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }} 
)


function App() {
  return <RouterProvider router={router}   future={{v7_startTransition: true}}/>
}

export default App

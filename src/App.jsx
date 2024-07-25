




import { createBrowserRouter } from "react-router-dom"

import { Hero,Portfolio,About,Contact ,Home} from './pages'
import { RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Hero/>,
    children:[
      {index:true, element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'portfolio',element:<Portfolio/>},
    ]
  },
])

function App() {


  return <RouterProvider router={router}/>
}

export default App

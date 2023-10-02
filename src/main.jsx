import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HotelCards from './Components/HotelCards/HotelCards.jsx';
import PropartyDetails from './Components/PropartyDetails/PropartyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<HotelCards/>
      }
    ]
  },
  {
    path:"/propartyDetail/:id",
    element:<PropartyDetails/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

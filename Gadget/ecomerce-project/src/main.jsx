import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Component/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './Component/AboutUs';

import App from './App';

import Statistic2 from './Component/Statistic2';
import Statistics from './Component/Statistics';
import Dashboard from './Component/Dashbroad';
import Error from './Component/Error';

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <App/>, 
       errorElement:<Error></Error>,
      children: [
        {
          path: '/', 
          element:<Home></Home>
         
        },
        {
          path: '/statistics', 
          element: <Statistic2/>,
          
        },
       
      
        {
          path: '/statistics/:productId', 
          element: <Statistics />,
          loader: async ({ params }) => {
            try {
              const response = await fetch(`/data.json?productId=${params.productId}`);
              if (!response.ok) {
                throw new Error('Failed to fetch product data');
              }
              return response.json();
            } catch (error) {
              console.error('Error:', error);
              // Handle error (e.g., show a message to the user)
            }
          }
          
        },
        
        {
          path: '/dashboard', 
          element: <Dashboard></Dashboard>,
          loader:()=>fetch('/data.json')
        },
        {
          path: '/about', 
          element: <AboutUs></AboutUs>
     
        },
        
      ],
    },
   
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

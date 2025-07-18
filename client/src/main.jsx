import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className='bg-white mx-auto px-4 sm:px-6 lg:px-8 '>
      <RouterProvider router={Router} />
    </div>
    </HelmetProvider>
  </StrictMode>,
)

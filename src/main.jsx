/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './router/Router';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

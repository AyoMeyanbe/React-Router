import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, // rendering index component first
    errorElement: <NotFoundPage />, // Displays when there is an error
  },
  {
    path:'/profiles',
    element: <ProfilesPage />,
    children: [
      {
    path: '/profiles/:profileId',
    element: <ProfilePage />,
  }
    ]
  },
  
]); // recommended way to create a router

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* (line 15)differing the entrypoint to our application to react router */}
    
  </React.StrictMode>
);

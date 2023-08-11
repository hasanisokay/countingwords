import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountWords from './components/CountWords.jsx';
import EmailValidation from './components/EmailValidation.jsx';
import FileUpload from './components/FileUpload.jsx';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <CountWords></CountWords>
      },
      {
        path: "validate-email",
        element: <EmailValidation></EmailValidation>
      },
      {
        path: "file-upload",
        element: <FileUpload></FileUpload>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
  </React.StrictMode>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from "react-router-dom";

import "quill/dist/quill.core.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  // </React.StrictMode>,
)

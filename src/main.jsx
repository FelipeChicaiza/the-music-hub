import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from '../routes/Layout.jsx';
import DetailView from '../routes/DetailView.jsx';
import React from 'react'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index={true} path="/" element={<App/>} />
        <Route index={false} path="/:name" element={<DetailView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
)

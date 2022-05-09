import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//ADDED IMPORTS
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Currencies from './pages/currencies'
import Price from './pages/price'
import Main from './pages/main'
import Nav from './components/nav'


// Wrap App comp inside Router comp to enable router features 
// Routes allow us to define our route tree
// Notice we have a notion of parent routes and child routes
// Route defines what the path should look like and what component to render

// What Outlet is looking at:
// Under the hood our chronological order of routes is:
// '/'
// 'currencies/'
// 'price/'
// ':symbol/'


// index routes render in their parent route's outlet at the parent route's path 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Main />} />
          <Route path='currencies/' element={<Currencies />} />
          <Route path='/price' element={<Price />} >
            <Route path=':symbol' element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

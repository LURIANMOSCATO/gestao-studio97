import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './Home';
import Agenda from './Agenda';
import Login from './Login';

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {


  
  return (
    <BrowserRouter>
      <Routes>
        <Route element= {<SidebarLayout/>}>
          <Route path="/" element= {<Home/>} />
          <Route path="/agenda" element={<Agenda/>} />
        </Route>
        <Route path="/login" element= {<Login/>} />
      </Routes>
    
  </BrowserRouter>
  );
}

export default App;

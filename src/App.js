import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Protected from './Protected'
import Home from './Home';
import Agenda from './Agenda';
import View from './View';
import Vendas from './Vendas';
import Config from './Config';
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
          <Route path="/" element= {<Protected Component={Home} />} />
          <Route path="/agenda" element={<Protected Component={Agenda} />} />
          <Route path="/view/:idCliente" element={<Protected Component={View}/>}/>
          <Route path="/vendas" element={<Protected Component={Vendas} />} />
          <Route path="/config" element={<Protected Component={Config}/>} />
        </Route>
        <Route path="/login" element= {<Login/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { ClientPage } from './pages/ClientPage/ClientPage';
import { ProjetPage } from './pages/ProjetPage/ProjetPage';
import { TicketPage } from './pages/TicketPage/TicketPage';
import { FacturePage } from './pages/FacturePage/FacturePage';
import {UnknowPage} from './pages/UnknowPage/UnknowPage';
import { AccountClientPage } from './pages/AccountClientPage/AccountClientPage';
import { AddAccountClientPage } from './pages/AddAccountClientPage/AddAccountClientPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<NavBar page={<HomePage/>}/>}/>
          <Route path='/clients' element={<NavBar page={<ClientPage/>}/>}/>
          <Route path='/clients/:id' element={<NavBar page={<AccountClientPage/>}/>}/>
          <Route path='/clients/ajouter' element={<NavBar page={<AddAccountClientPage />}/>}/>
          <Route path='/projets' element={<NavBar page={<ProjetPage/>}/>}/>
          <Route path='/factures' element={<NavBar page={<FacturePage/>}/>}/>
          <Route path='/tickets' element={<NavBar page={<TicketPage/>}/>}/>
          <Route path='*' element={<UnknowPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

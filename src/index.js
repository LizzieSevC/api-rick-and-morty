import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {Home} from './Components/Home/Home';
import {Characters} from './Components/Characters/Characters';
import {NavBar} from './Components/NavBar/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/Characters' element={<Characters/>} />
        <Route path='*' element={<Navigate to='</Home>'/>} /> {/* esta línea permite que, si la url es diferente a cualquier ubicación en nuestra app, redireccione al usuario a Home */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

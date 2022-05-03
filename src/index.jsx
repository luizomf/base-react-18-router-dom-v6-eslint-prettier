import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './templates/App';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<App />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
);

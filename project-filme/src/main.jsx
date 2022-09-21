import React from 'react';
import ReactDOM from 'react-dom/client';
//import do SPA react
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import App from './App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    {/* O path tem um parametro dinamico q vai esperar o id do filme para detalha-lo */}
                    <Route path="movie/:id" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

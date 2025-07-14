import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SobreNos from '../pages/SobreNos';
import Projetos from '../pages/Projetos';
import Colabore from '../pages/Colabore';
import Contato from '../pages/Contato';
import VisiteNos from '../pages/VisiteNos';
import DefaultLayout from '../layouts/DefaultLayout';
import NotFound from './NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home/>} />
        <Route path='/sobrenos' element={<SobreNos />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/colabore' element={<Colabore />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/visitenos' element={<VisiteNos />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

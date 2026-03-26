import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import WheelRepair from './pages/WheelRepair';
import TyreStorage from './pages/TyreStorage';
import WheelPainting from './pages/WheelPainting';
import TyreRepair from './pages/TyreRepair';
import Contacts from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wheel-repair" element={<WheelRepair />} />
          <Route path="/tyre-storage" element={<TyreStorage />} />
          <Route path="/wheel-painting" element={<WheelPainting />} />
          <Route path="/tyre-repair" element={<TyreRepair />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
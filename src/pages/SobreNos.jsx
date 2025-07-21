import React from 'react';
import { useEffect } from 'react';

const SobreNos = () => {
  useEffect(() => {
    document.title = 'Sobre nós - Ministério ide';
  }, []);

  return <h1>SobreNos</h1>;
};

export default SobreNos;

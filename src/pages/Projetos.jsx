import React from 'react';
import { useEffect } from 'react';

const Projetos = () => {
  useEffect(() => {
    document.title = 'Projetos - Ministério ide';
  }, []);

  return <h1>Projetos</h1>;
};

export default Projetos;

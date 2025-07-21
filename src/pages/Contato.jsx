import React from 'react';
import { useEffect } from 'react';

const Contato = () => {
  useEffect(() => {
    document.title = 'Contato - Ministério ide';
  });

  return <h1>Contato</h1>;
};

export default Contato;

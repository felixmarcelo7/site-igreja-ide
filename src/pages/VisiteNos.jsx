import React from 'react';
import { useEffect } from 'react';

const VisiteNos = () => {
  useEffect(() => {
    document.title = 'Visite nos - Ministério ide';
  }, []);
  return <h1>VisiteNos</h1>;
};

export default VisiteNos;

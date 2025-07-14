import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl text-red-600 font-bold">404</h1>
      <p>Página não encontrada</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">Voltar para a Home</Link>
    </div>
  );
}
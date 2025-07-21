import React from 'react';
import { useEffect } from 'react';
import fundo from '/img/fundo-home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Ministério ide';
  }, []);

  return (
    <>
      <section>
        <div
          className="bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${fundo})` }}
        >
          <div className="flex flex-col justify-center items-center h-screen font-principal-poppins">
            <img
              src="/img/LOGO-igreja-p.png"
              alt="Logo da igreja"
              className="h-96"
            />
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet conserum ea quos! Nihil, odio ipsa.{' '}
              <br /> Excepturi delectus ut, sed quis laudantium quisquam
              adipisci impedit ullam architecto.
            </p>
            <Link to="/visitenos">
              <button className="cursor-pointer mt-15 font-medium bg-white/20 text-white px-4 py-1 rounded-full text-xl">
                Nos Visite
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

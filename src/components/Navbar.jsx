import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';

const Navbar = () => {
  return (
    <nav className="w-screen bg-white text-principal-preto font-principal-poppins">
      <div className="flex justify-between mx-7 items-center">
        <div>
          <Link to="/">
            <img
              src="/img/LOGO-igreja-nav.png"
              alt="logo da igreja"
              className="h-20"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-10 font-medium">
            <div className="group relative">
              <li>
                <Link to="/">Home</Link>
              </li>
              <span
                className="absolute bg-principal-preto h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/sobrenos">Sobre Nós</Link>
              </li>
              <span
                className="absolute bg-principal-preto h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              <span
                className="absolute bg-principal-preto h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/colabore">Colabore</Link>
              </li>
              <span
                className="absolute bg-principal-preto h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <span
                className="absolute bg-principal-preto h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100"
              ></span>
            </div>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link>
                <FaFacebookSquare className="text-xl" />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram className="text-xl" />
              </Link>
            </li>
            <li>
              <Link>
                <TfiYoutube className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

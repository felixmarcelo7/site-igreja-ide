import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const isNosVisite = useLocation().pathname === '/visitenos';
  const isContato = useLocation().pathname === '/contato';

  useEffect(() => {
    //se estiver na página de contato ou nos visite a cor da navbar não muda
    if (isContato || isNosVisite) {
      setScrolled(true);
      return;
    } else {
      setScrolled(false);
    }

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isContato, isNosVisite]);

  return (
    <nav
      className={`fixed w-screen z-50 transition-all duration-400 ${
        scrolled ? 'bg-white text-principal-preto' : ' bg-white/10 text-white '
      } font-principal-poppins`}
    >
      <div className="flex justify-between mx-7 items-center">
        <div>
          <Link to="/">
            <img
              src={`${
                scrolled
                  ? '/img/LOGO-igreja-nav.png'
                  : '/img/LOGO-igreja-branca-sem-borda.png'
              }`}
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
                className={`absolute ${
                  scrolled ? 'bg-principal-preto' : 'bg-white'
                }  h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100`}
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/sobrenos">Sobre Nós</Link>
              </li>
              <span
                className={`absolute ${
                  scrolled ? 'bg-principal-preto' : 'bg-white'
                }  h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100`}
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              <span
                className={`absolute ${
                  scrolled ? 'bg-principal-preto' : 'bg-white'
                }  h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100`}
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/colabore">Colabore</Link>
              </li>
              <span
                className={`absolute ${
                  scrolled ? 'bg-principal-preto' : 'bg-white'
                }  h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100`}
              ></span>
            </div>
            <div className="group relative">
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <span
                className={`absolute ${
                  scrolled ? 'bg-principal-preto' : 'bg-white'
                }  h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100`}
              ></span>
            </div>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 items-center">
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
                <FaYoutube className="text-2xl"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

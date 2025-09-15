import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTimes, FaBars } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isNosVisite = useLocation().pathname === "/visitenos";
  const isContato = useLocation().pathname === "/contato";

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

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isContato, isNosVisite]);

  return (
    <nav
      className={`fixed w-screen z-50 transition-all duration-400 ${
        scrolled ? "bg-white text-principal-preto" : " bg-white/10 text-white "
      } font-principal-poppins`}
    >
      <div className="flex justify-between mx-7 items-center">
        <div>
          <Link to="/">
            <img
              src={`${
                scrolled
                  ? "/img/LOGO-igreja-nav.png"
                  : "/img/LOGO-igreja-branca-sem-borda.png"
              }`}
              alt="logo da igreja"
              className="h-16"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-10 font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/sobrenos", label: "Sobre nós" },
              { to: "/projetos", label: "Pojetos" },
              { to: "/colabore", label: "Colabore" },
              { to: "/contato", label: "contato" },
            ].map(({ to, label }) => (
              <div className="group relative" key={to}>
                <li>
                  <Link to={to}>{label}</Link>
                </li>
                <span
                  className={`absolute ${
                    scrolled ? "bg-principal-preto" : "bg-white"
                  } h-0.5 w-full scale-x-0 
                  transition-transform duration-400 ease-out origin-right group-hover:origin-left group-hover:scale-x-100`}
                ></span>
              </div>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
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
                <FaYoutube className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled
            ? "bg-white text-principal-preto"
            : "bg-principal-preto/95 text-white"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {[
            { to: "/", label: "Home" },
            { to: "/sobrenos", label: "Sobre Nós" },
            { to: "/projetos", label: "Projetos" },
            { to: "/colabore", label: "Colabore" },
            { to: "/contato", label: "Contato" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {label}
            </Link>
          ))}

          <div className="flex gap-5 mt-4">
            <Link>
              <FaFacebookSquare className="text-2xl" />
            </Link>
            <Link>
              <FaInstagram className="text-2xl" />
            </Link>
            <Link>
              <FaYoutube className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

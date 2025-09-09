import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-principal-preto">
      <div className="flex justify-around p-10 font-principal-poppins text-white">
        <div>
          <p>
            Rua alguma coisa, 000 <br /> Bom Jardim, Maranhao-MA
          </p>
          <p>Cel:9899000-0000</p>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <h3 className="text-principal-amarelo font-bold">IGREJA</h3>
            </li>
            <li>
              <Link to="/sobrenos">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/colabore">Colabore</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/">Eventos</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <h3 className="text-principal-amarelo font-bold">INFORMAÇÕES</h3>
            </li>
            <li>
              <Link to="/contato">Fale Conosco</Link>
            </li>
            <li>
              <Link to="/visitenos">Onde estamos</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <h3 className="text-principal-amarelo font-bold">
                REDES SOCIAIS
              </h3>
            </li>
            <li>
              <Link>facebook</Link>
            </li>
            <li>
              <Link>instagram</Link>
            </li>
            <li>
              <Link>youtube</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-white font-principal-poppins text-center p-5 text-sm">
        <p>Copyright © 2025 – Ministétio Apostolico ide</p>
      </div>
    </footer>
  );
};

export default Footer;

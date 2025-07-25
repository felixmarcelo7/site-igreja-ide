import React from 'react';
import { useEffect } from 'react';
import fundo from '/img/fundo-home.jpg';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
  useEffect(() => {
    document.title = 'Ministério ide';
  }, []);

  const data = [
    {
      id: '1',
      image: '/img/banner-evento-1.png',
      title: 'Título do Evento',
      date: 'Data do evento',
    },
    {
      id: '2',
      image: '/img/banner-evento-1.png',
      title: 'Título do Evento',
      date: 'Data do evento',
    },
  ];

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
            <button className="mt-15 font-medium bg-white/20 text-white transition-all duration-300 hover:bg-white/30 px-4 py-1 rounded-full text-xl">
              <Link to="/visitenos">Visite nos</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="font-principal-poppins bg-secundaria-fundo py-7">
        <h2 className="font-bold text-xl text-center mb-6">PRÓXIMOS EVENTOS</h2>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col justify-center items-center mb-5 ">
                <div className="w-2/3">
                  <img
                    src={item.image}
                    alt={`Banner do evento ${item.title}`}
                  />
                  <h3 className="font-medium text-lg mt-3">{item.title}</h3>
                  <p>{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="font-principal-poppins text-white bg-black pt-10">
        <div className="flex justify-around">
          <div className="flex flex-col gap-7">
            <h2 className="text-3xl font-bold">
              Fique por Dentro da Nossa Caminhada
            </h2>
            <div>
              <p className="italic">
                “A tua palavra é lâmpada que ilumina os meus passos e <br /> luz
                que clareia o meu caminho." Sl 119:105
              </p>
              <p>
                Inscreva-se para receber estudos, pregações e tudo <br /> o que
                Deus está fazendo entre nós.
              </p>
            </div>

            <form className="flex flex-col items-start text-black gap-3">
              <input
                type="text"
                placeholder="Digite seu nome"
                id="nome"
                className="py-1 px-3 bg-white rounded-lg focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Digite seu E-mail"
                id="e-mail"
                className="py-1 px-3 bg-white rounded-lg focus:outline-none"
                required
              />
              <input
                type="submit"
                value="Enviar"
                className="bg-principal-amarelo py-0.5 px-3 rounded-lg font-bold hover:bg-hover-buttom-amarelo"
              />
            </form>
          </div>
          <div>
            <img
              className="h-96"
              src="/img/homem-orando.png"
              alt="homem orando"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from 'react';

import Container from 'components/Container';
import Header from 'components/Header';

import { HomeContent } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HomeContent className="container">
          <section>
            <h2>Seja Bem vindo a Platinum Drinks</h2>
            <p>Explore os mais variados drinks e suas receitas.</p>
          </section>
          <section className="video-container">
            <iframe
              width="1140"
              height="360"
              frameBorder="0"
              src="https://www.youtube.com/embed/GglF8jqYBzc?autoplay=1&mute=1&loop=1"
              title="Video apresentativo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
            ></iframe>
          </section>
        </HomeContent>
      </Container>
    </>
  );
};

export default Home;

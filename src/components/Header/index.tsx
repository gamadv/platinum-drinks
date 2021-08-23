import React from 'react';

import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

import { Link } from 'react-router-dom';

import { HeaderWrapper } from './styles';

import platLogo from 'assets/platinum-drinks-logo.svg';

const Header: React.FC = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <HeaderWrapper>
      <div className="brand-content">
        <section className="container">
          <Link to="/">
            <img src={platLogo} alt="Logo do site" className="logo" />
            <h1>Platinum Drinks</h1>
          </Link>
          <span>{currentDate}</span>
        </section>
      </div>
      <div className="category-menu">
        <section className="container">
          <menu>
            <Link to="/categories">
              <h2>Categorias</h2>
            </Link>
          </menu>
        </section>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

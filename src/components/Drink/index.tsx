import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IDrink {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
}

const Drink: React.FC<IDrink> = ({
  idDrink,
  strDrinkThumb,
  strDrink,
}: IDrink) => {
  return (
    <>
      <Link to={`/drink/${idDrink}`}>
        <Container>
          <img src={strDrinkThumb} alt={strDrink} />
          <h4>{strDrink}</h4>
        </Container>
      </Link>
    </>
  );
};

export default Drink;

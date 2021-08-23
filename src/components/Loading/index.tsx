import React from 'react';

import { BiDrink } from 'react-icons/bi';
import { LoadingContainer } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <BiDrink className="loading" size={50} />
    </LoadingContainer>
  );
};

export default Loading;

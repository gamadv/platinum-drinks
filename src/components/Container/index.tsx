import React from 'react';

import { Main } from './styles';

const Container: React.FC = ({ children }) => {
  return (
    <Main className="container" id="">
      {children}
    </Main>
  );
};

export default Container;

import styled from 'styled-components';

export const Container = styled.li`
  margin: 1rem 1rem 0;
  background-color: #fff;

  cursor: pointer;
  transition: 0.2s all ease-in-out;

  img {
    max-width: 250px;
    border-radius: 8px;
  }

  h4 {
    font-weight: 500;
    font-family: 'Arial', sans-serif;
    font-size: 0.875rem;
  }

  &:hover {
    transform: scale(1.1);

    h4 {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 100px;
    }
  }
`;

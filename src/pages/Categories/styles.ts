import styled from 'styled-components';

export const CategoryContainer = styled.div`
  background-color: #ffff;

  padding: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 1.25rem;
  }
`;

export const CategoryContent = styled.section`
  padding: 1.5rem 3rem;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      justify-content: center;

      background: #ffff;

      border: 1px solid #009fb7;
      border-radius: 8px;

      margin: 1rem 1rem 0;
      padding: 0.75rem;

      width: calc(100% - 10px);
      max-width: 160px;

      cursor: pointer;

      transition: 0.2s ease-out;

      &:hover {
        background: #fed766;
        border: none;

        font-weight: 700;
        color: #272727;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 1rem;
    ul {
      width: calc(100% - 10px);
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow-x: scroll;
      li {
      }
    }
  }
`;

export const DrinksContent = styled.section`
  padding: 1.5rem 3rem;

  h2 {
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1024px) {
    padding: 0.75rem;
    h2 {
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;

      flex-wrap: nowrap;
      white-space: nowrap;
      overflow-x: scroll;
    }
  }
`;

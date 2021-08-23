import styled from 'styled-components';

export const DrinkDetailsContent = styled.div`
  background-color: #ffff;
  padding: 2rem;
  border-radius: 4px;

  section {
    display: flex;
  }
  section img {
    max-width: 418px;
    border-radius: 8px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 2rem;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 8px;
        background: #eff1f3;
        width: calc(100% - 60%);
        margin: 1rem 1rem 0 0;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    section {
      flex-direction: column;
      align-items: center;
    }
    section img {
      max-width: 265px;
    }
    .info-container {
      margin: 0;
      ul {
        li {
          width: 100%;
        }
      }
    }
    h2 {
      margin: 1.5rem;
      text-align: center;
    }
  }
`;

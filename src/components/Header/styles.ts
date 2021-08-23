import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  .brand-content {
    display: flex;
    padding: 1rem 0;
    background-color: #1b1b1e;
  }

  .logo {
    height: 100%;
    max-height: 70px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      display: flex;
      align-items: center;
    }
    span {
      font-family: 'Dancing Script', cursive;
      font-size: 1.75rem;
      color: #009fb7;
    }
  }

  h1 {
    margin-left: 1rem;
  }

  .category-menu {
    background-color: #fed766;

    menu {
      padding: 1rem;

      h2 {
        color: #272727;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .brand-content {
      padding: 1rem;
    }
    .logo {
      max-height: 45px;
    }
    section {
      h1 {
        font-size: 1.5rem;
        margin-right: 1rem;
        width: max-content;
      }
      span {
        font-size: 1rem;
      }
    }
  }
`;

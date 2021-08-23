import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 40%;

  .loading {
    animation: rotation 1s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @media screen and (max-width: 1024px) {
    left: 45%;
  }
`;

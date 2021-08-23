import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background: #EFF1F3;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-size: 1rem;
        
    }   

    button, input{
        background: #575A5E;
    }
    button, input{
        :hover{
            background: #A7A2A9;
            transition: 0.2s ease-out;
        }
    }

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        color: #ffffff;
    }
    h2, h3{
        font-size: 1.5rem;
    }
    h2, h3, h4, h5, h6, p, strong, li{
        font-family: 'Open Sans Condensed', sans-serif;
    }

    ul{
        list-style: none;
    }
    h4, h5, h6, p{
        font-size: 1.25rem;
    }
    .container{
        max-width: 1200px;
        margin-inline: auto;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93, 75%;
        }
    }   
    @media (max-width: 728px) {
        html {
            font-size: 87, 5%;
        } 
    }

`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, input, button{
    font-family: 'Inter', sans-serif;
    background-color: ${props=>props.theme["gray-600"]};
}

`;
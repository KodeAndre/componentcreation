import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
        max-height: 100%;
        max-width: 100%;
        font-family: arial;
    }

    body{
        background-color: #202020;
        color: #fafafa;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    hr {
        width: 15rem;
    }
`
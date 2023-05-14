import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
     ${reset}

     /* @font-face {
        font-family:Noto Sans KR ;
        src: url("../styles/fonts/NotoSansKR-Regular.otf") format('off'),;
     } */

@font-face {
    font-family: 'test';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2') format('woff2');
    font-style: normal;
}
    a{
        text-decoration: none;
       
    }
    *{
        box-sizing: border-box;
        font-family: 'test' !important;;
    }

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;

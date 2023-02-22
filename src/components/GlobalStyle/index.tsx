import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  /** sunny side **/
  --blue-background: #C2E9F6;
  --blue-border: #72cce3;
  --blue-color: #96dcee;
  --yellow-background: #fffaa8;
  --yellow-border: #f5eb71;
  /** dark side **/
  --indigo-background: #808fc7;
  --indigo-border: #5d6baa;
  --indigo-color: #6b7abb;
  --gray-border: #e8e8ea;
  --gray-dots: #e8e8ea;
  /** general **/
  --white: #fff;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Dosis', sans-serif;
    /* transition: all 0.50s linear; */
    margin: 0;
    font-size: 16px;
  }

  p {
    /* font-size: .875em; */
    margin: 0 0 10px;
  }

  #__next {
    height: 100%;
  }
  `;

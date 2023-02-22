import { css, CSSProp } from "styled-components";

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const mobile = (inner: CSSProp) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;
export const tablet = (inner: CSSProp) => css`
  @media (max-width: ${size.tablet}) {
    ${inner};
  }
`;
export const desktop = (inner: CSSProp) => css`
  @media (max-width: ${size.desktop}) {
    ${inner};
  }
`;
export const laptop = (inner: CSSProp) => css`
  @media (max-width: ${size.laptop}) {
    ${inner};
  }
`;
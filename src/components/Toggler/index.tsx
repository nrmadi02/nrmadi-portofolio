import React from "react";
import styled, { css, keyframes } from "styled-components";


interface ToggleProps {
  theme: string;
  toggleTheme: (value: string) => void;
}


const ToggleLabel = styled.label`
  display: block;
  position: relative;
  width: 80px;
  height: 38px;
  margin: 0 auto;
  scale: 0.9;
  background-color: white;
  border-radius: 56px;
  margin-top: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.3s ease background-color;
  overflow: hidden;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 22px;
  height: 21px;
  background-color: #fd9129;
  transform: scale(1);
  border-radius: 50%;
  transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform,
    0.3s ease background-color;
  z-index: 1;
`;

const star = css`
  top: 0;
  left: -5px;
  font-size: 40px;
  line-height: 18px;
  color: #fd9129;
  transition: 0.3s ease color;
`;

const StartOne = styled.div`
  ${star}
  position: relative;
`;

const StartTwo = styled.div`
  ${star}
  position: absolute;
  transform: rotateZ(36deg);
`;

const MoonWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: 8px;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease bottom;
  &::before {
    content: "";
    position: absolute;
    top: -7px;
    left: -10px;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s ease background-color;
  }
`;


const ToggleCheckbox = styled.input`
  display: none;
  &:checked + ${ToggleLabel} {
    background-color: #6b8096;
  }
  &:checked + ${ToggleLabel} ${ToggleWrapper} {
    top: 3px;
    left: 43px;
    transform: scale(0.3);
    background-color: #fd9129;
  }
  &:checked + ${ToggleLabel} ${star} {
    color: #fd9129;
  }
  &:checked + ${ToggleLabel} ${MoonWrapper} {
    bottom: 6px;
    &::before {
      background-color: #6b8096;
    }
  }
`;

const Toggle = ({ theme, toggleTheme }: ToggleProps) => {
  return (
    <>
      <ToggleCheckbox
      onChange={() => {
        toggleTheme(theme === "dark" ? "light" : 'dark')
      }}
      defaultChecked={theme == "light"}
      type="checkbox" id="toggle_checkbox" />

      <ToggleLabel htmlFor="toggle_checkbox">
        <ToggleWrapper id="star">
          <StartOne id="star-1">★</StartOne>
          <StartTwo id="star-2">★</StartTwo>
        </ToggleWrapper>
        <MoonWrapper id="moon"></MoonWrapper>
      </ToggleLabel>
    </>
  );
};

export default Toggle;


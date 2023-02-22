import Link from "next/link";
import { NextRouter } from "next/router";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  font-weight: 600;
  /* position: relative; */
  text-decoration: none !important;
  outline: none;
  opacity: 0.6;
  transition: all 0.3s linear;
  border-bottom: 1px solid ${({ theme }) => theme.borderlink};
  &:hover {
    opacity: 1;
  }
`;

interface ActiveLink {
  active?: boolean;
}

const LIItem = styled.li<ActiveLink>`
  display: block;
  position: relative;
  padding: 0;
  text-align: center;
  /* transition: all 0.1s linear; */
  padding-left: 0px;
  border-right: 0px;
  transition: all 0.2s linear;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.textglobal};
  &:first-child ${StyledLink} {
    border-top: 1px solid ${({ theme }) => theme.borderlink};
  }
  &:hover {
    padding-left: 4px;
    border-right: 4px;
    transition: all 0.2s linear;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.textglobal};
  }
  ${(props) =>
    props.active &&
    css`
      ${StyledLink} {
        transition: all 0.3s linear;
        background-color: transparent;
        opacity: 1;
      }

      padding-left: 4px;
      border-right: 4px;
      transition: all 0.1s linear;
      border-right-style: solid;
      border-right-color: ${({ theme }) => theme.textglobal};
    `}
`;

const LiIcon = styled.i`
  list-style: none;
`;

interface CustomLinkProps {
  href: string;
  name: string;
  icon: ReactNode;
}

const CustomLink = ({ href, name, icon }: CustomLinkProps) => {
  return (
    <StyledLink href={href}>
      <LiIcon>{icon}</LiIcon>
      {name}
    </StyledLink>
  );
};


interface ItemSideProps {
    active: boolean;
    icon: ReactNode;
    path: string;
    name: string;
}


const ItemSideBar = ({icon, name, path, active}:ItemSideProps) => {
  return (
    <LIItem id="li-item" active={active}>
      <CustomLink icon={icon} name={name} href={path} />
    </LIItem>
  );
};

export default ItemSideBar;

import styled, { css } from "styled-components";
import { tablet } from "../theme/MediaQuery";
import { FaBars } from "react-icons/fa";
import { useAppStore } from "@/store/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HeaderNavbar = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  transition: all 0.3s linear;
  transform: translateY(-60px);
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
  position: fixed;
  z-index: 20;
  ${tablet(css`
    height: 50px;
    transform: translateY(0px);
    width: 100%;
    background-color: ${({ theme }) => theme.body};
  `)}
`;

const TitleNavbar = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  margin: 0 20px;
  line-height: 50px;
`;

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.textglobal};
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    scale: 1.03;
  }
`;

const Navbar = () => {
  const router = useRouter()
  const {changeState, closeNav} = useAppStore()
  useEffect(() => {
    closeNav()
  }, [router])
  return (
    <HeaderNavbar>
      <TitleNavbar>Nur Ahmadi</TitleNavbar>
      <Hamburger onClick={() => changeState()} >
        <FaBars size={25} />
      </Hamburger>
    </HeaderNavbar>
  );
};

export default Navbar;

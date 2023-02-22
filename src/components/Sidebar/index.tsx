import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { useDarkMode } from "../Hooks/useDarkMode";
import { tablet } from "../theme/MediaQuery";
import Toggle from "../Toggler";
import { AiOutlineHome, AiOutlineIdcard } from "react-icons/ai";
import {
  MdOutlineCardTravel,
  MdOutlineArticle,
  MdOutlineContactPhone,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import ItemSideBar from "./ItemSidebar";
import { useAppStore } from "@/store/store";

interface NavbarProps {
  readonly isOpen: boolean;
}

const Header = styled.header<NavbarProps>`
  width: 150px;
  background-color: ${({ theme }) => theme.background};
  height: 100%;
  position: fixed;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  z-index: 10;
  overflow: auto;
  transition: all 0.2s linear;
  top: 0;
  max-width: 150px;

  ${(props) =>
    props.isOpen &&
    tablet(css`
      /* top: 50px; */
      width: 100%;
      margin-left: 0px !important;
      /* -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none; */
      max-width: 320px !important;
      box-shadow: 0 1px 10px rgb(0 0 0 / 20%) !important;
      /* height: calc(100% - 50px); */
    `)}

  ${tablet(css`
    top: 50px;
    /* width: 100%; */
    margin-left: -150px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    /* max-width: 150px; */
    height: calc(100% - 50px);
  `)}
`;

const BoxHeader = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
  max-width: 100%;
  outline: 0;
  max-height: none;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const BoxImageHeader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  transition: all 0.3s linear;
  background-color: ${({ theme }) => theme.bgavatar};
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NameTag = styled.h1`
  font-size: 27px;
  padding: 13px;
  text-align: center;
  font-weight: 500;
  margin: 0;
`;

const BoxItem = styled.div`
  display: block;
  padding: 0px 0 50px;
  width: 100%;
`;

const ULItem = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
`;

interface Props {
  theme: string;
}

interface ItemSideType {
  icon: ReactNode;
  path: string;
  name: string;
}

const ItemSideBars: ItemSideType[] = [
  {
    icon: <AiOutlineHome size={25} />,
    name: "Home",
    path: "/",
  },
  {
    icon: <CgProfile size={25} />,
    name: "About",
    path: "/about",
  },
  {
    icon: <AiOutlineIdcard size={25} />,
    name: "Resume",
    path: "/resume",
  },
  {
    icon: <MdOutlineCardTravel size={25} />,
    name: "Portofolio",
    path: "/portofolio",
  },
  {
    icon: <MdOutlineArticle size={25} />,
    name: "Blog",
    path: "/blog",
  },
  {
    icon: <MdOutlineContactPhone size={25} />,
    name: "Contact",
    path: "/contact",
  },
];

const Sidebar = ({ theme }: Props) => {
  const { themeToggler } = useDarkMode();
  const router = useRouter();
  const {isOpen} = useAppStore();

  return (
    <Header isOpen={isOpen}>
      <BoxHeader>
        <ContentHeader>
          <BoxImageHeader>
            <Image
              width="90"
              height="90"
              alt="_image_avt"
              src={"/images/avatar-img.png"}
            />
          </BoxImageHeader>
          <NameTag>Nur Ahmadi</NameTag>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <BoxItem>
            <ULItem>
              {ItemSideBars.map(({ icon, name, path }, idx) => {
                return (
                  <ItemSideBar
                    key={idx}
                    active={router.pathname == path}
                    icon={icon}
                    name={name}
                    path={path}
                  />
                );
              })}
            </ULItem>
          </BoxItem>
        </ContentHeader>
      </BoxHeader>
    </Header>
  );
};

export default Sidebar;

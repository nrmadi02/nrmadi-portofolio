import { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useDarkMode } from "../Hooks/useDarkMode";
import Sidebar from "../Sidebar";
import { tablet } from "../theme/MediaQuery";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import PageLoader from "../Loader/PageLoader";
import Navbar from "../Navbar";

const LayoutPage = styled("div")`
  position: relative;
  height: 100%;
`;

interface LayoutChildrenProps {
  readonly tipe: string;
}

const LayoutChildren = styled.div<LayoutChildrenProps>`
  margin-left: 150px;
  background-color: white;
  position: relative;
  height: 100%;
  transition: all 0.2s linear;
  color: ${(props) => (props.tipe == "dark" ? "#4d91de" : "#ff724c")};

  ${tablet(css`
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
    height: auto;
    margin: 0;
    border: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  `)}
`;

const WrapperPage = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding: 0; */
  padding: 25px 5%;
  background-color: #f5f5f5;
  background-attachment: fixed;
  background-position: 50%;
  background-size: cover;
  -webkit-background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: all 0.3s linear;
  background-image: ${({ theme }) => theme.bgimage};
  ${tablet(css`
    padding: 0px;
  `)}
`;

const FramerLoading = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
`;

const LayoutLoading = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.body};
`;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { theme } = useDarkMode();
  const [loading, setLoading] = useState(true);

  return (
    <LayoutPage>
      {loading && (
        <FramerLoading
          key="loadig"
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
            transition: {
              duration: 1.5,
              ease: "easeIn",
              delay: 1.5,
            },
          }}
          onAnimationComplete={() => {
            setLoading(false);
          }}
        >
          <LayoutLoading>
            <PageLoader />
          </LayoutLoading>
        </FramerLoading>
      )}
      <Sidebar theme={theme} />
      <Navbar />
      <LayoutChildren tipe={theme}>
        <WrapperPage>
          {children}
        </WrapperPage>
      </LayoutChildren>
    </LayoutPage>
  );
};

export default Layout;

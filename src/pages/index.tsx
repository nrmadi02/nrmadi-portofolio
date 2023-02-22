import { useDarkMode } from "@/components/Hooks/useDarkMode";
import Toggle from "@/components/Toggler";
import { useEffect } from "react";
import HeadSEO from "@/components/SEO/HeadSeo";
import LayoutSubpage from "@/components/Layout/Subpage";
import styled from "styled-components";
import Link from "next/link";

const ContentHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`

const SecondTitle = styled.h2`
font-weight: normal;
color: #222222;
  margin: 0;
`;

const Home = () => {
  return (
    <>
      <HeadSEO title="Home" />
      
      <LayoutSubpage>
        <ContentHome>
          <Title>Nur Ahmadi</Title>
          <SecondTitle>Web Developer</SecondTitle>
        </ContentHome>
      </LayoutSubpage>
    </>
  );
};

export default Home;

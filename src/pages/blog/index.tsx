import { useDarkMode } from "@/components/Hooks/useDarkMode";
import Toggle from "@/components/Toggler";
import { useEffect } from "react";
import HeadSEO from "@/components/SEO/HeadSeo";
import LayoutSubpage from "@/components/Layout/Subpage";
import styled, { css } from "styled-components";
import SectionTitle from "@/components/SectionTitle";
import { tablet } from "@/components/theme/MediaQuery";
import { NextPage } from "next";
import {motion} from 'framer-motion'

const BlogSection = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  overflow: auto;
  box-shadow: 0 1px 33px rgb(0 0 0 / 15%);
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  position: absolute;
  top: auto;
  padding: 10px 0;
  left: 0;
  transition: all 0.3s linear;
  ${tablet(css`
    padding: 20px;
  `)}
`;

const BorderSection = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: transparent;
  top: 20px;
  left: 20px;
  transition: all 0.3s linear;
  border-left: 4px solid ${({ theme }) => theme.textglobal};
  border-top: 4px solid ${({ theme }) => theme.textglobal};
  ${tablet(css`
    display: none;
  `)}
`;

const Blog: NextPage = () => {
  return (
    <>
      <HeadSEO title="Resume" />
      {/* <LayoutSubpage> */}
        <BlogSection
          
        >
          <BorderSection />
          <SectionTitle title="Blog Pribadi" textBadge="Jangan malu belajar" />
        </BlogSection>
      {/* </LayoutSubpage> */}
    </>
  );
};

export default Blog;

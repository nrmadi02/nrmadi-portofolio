import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { tablet } from "../theme/MediaQuery";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/router";

const LayoutSubpageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  -webkit-perspective: 1500px;
  -moz-perspective: 1500px;
  perspective: 1500px;
  max-width: 1240px;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
`;

interface Props {
  children: ReactNode;
}

const VariantHome = {
  init: {
    opacity: 0,
    scale: 1.4,
  },
  anim: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
      //   delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const VariantAbout = {
  init: {
    opacity: 0.5,
    x: 1300,
    
  },
  anim: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
        delay: -0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const VariantResume = {
  init: {
    opacity: 0.5,
    x: -1300,
  },
  anim: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
      delay: -0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const VariantPortofolio = {
  init: {
    opacity: 0.5,
    y: -1300,
  },
  anim: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
      delay: -0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const VariantBlog = {
  init: {
    opacity: 0.5,
    y: 1300,
  },
  anim: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
      delay: -0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const VariantContact = {
  init: {
    opacity: 0,
    scale: 0.8,
  },
  anim: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
      //   delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const LayoutSubpage = ({ children }: Props) => {
  const router = useRouter();
  console.log(router.asPath);
  const variantType = (e: string): Variants | undefined => {
    type tplotOptions = {
      [key: string]: any;
    };
    const type: tplotOptions = {
      "/": VariantHome,
      "/about": VariantAbout,
      "/resume": VariantResume,
      "/portofolio": VariantPortofolio,
      "/blog": VariantBlog,
      "/contact": VariantContact,
    };
    return type[e];
  };
  return (
    <LayoutSubpageWrapper
      // key={router.asPath}
      initial="init"
      animate="anim"
      exit="exit"
      variants={variantType(router.asPath)}
    >
      {children}
    </LayoutSubpageWrapper>
  );
};

export default LayoutSubpage;

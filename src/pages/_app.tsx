import { GlobalStyles } from "@/components/GlobalStyle";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import {AnimatePresence} from 'framer-motion'
import LayoutSubpage from "@/components/Layout/Subpage";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Layout>
        <AnimatePresence mode="wait" onExitComplete={() => console.log("exit")}>
          <LayoutSubpage key={router.asPath}>
            <Component {...pageProps} />
          </LayoutSubpage>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

import { createContext, ReactNode, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../theme/Themes";
import { ThemeProvider as SCThemeProvider } from "styled-components";

export type DarkModeTypes = {
  themeToggler: (value: string) => void;
  theme: string;
};

const UseDarkModeOutput: DarkModeTypes = {
  themeToggler: () => {},
  theme: "dark",
};

export const ThemeContext = createContext(UseDarkModeOutput);

type ThemeProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<string>(UseDarkModeOutput.theme);
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    setMountedComponent(true);
  }, []);

  if (!mountedComponent) return <div />;
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        themeToggler: setMode,
      }}
    >
      <SCThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

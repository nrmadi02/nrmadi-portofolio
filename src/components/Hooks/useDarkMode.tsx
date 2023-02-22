import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";


export const useDarkMode = () => useContext(ThemeContext)

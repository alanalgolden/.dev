import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  primary: {
    100: "#fbe0e0",
    200: "#f8c2c1",
    300: "#f4a3a1",
    400: "#f18582",
    500: "#ed6663",
    600: "#be524f",
    700: "#8e3d3b",
    800: "#5f2928",
    900: "#2f1414",
  },
  secondary: {
    100: "#efefef",
    200: "#dedede",
    300: "#cecece",
    400: "#bdbdbd",
    500: "#adadad",
    600: "#8a8a8a",
    700: "#686868",
    800: "#454545",
    900: "#232323",
  },
  darkPurple: {
    100: "#d8d5d8",
    200: "#b1abb2",
    300: "#8a808b",
    400: "#635665",
    500: "#3c2c3e",
    600: "#302332",
    700: "#241a25",
    800: "#181219",
    900: "#0c090c",
  },
  purple: {
    100: "#ded9de",
    200: "#bdb3be",
    300: "#9b8c9d",
    400: "#7a667d",
    500: "#59405c",
    600: "#47334a",
    700: "#352637",
    800: "#241a25",
    900: "#120d12",
  },
  magenta: {
    100: "#f0d5e0",
    200: "#e1aac1",
    300: "#d380a3",
    400: "#c45584",
    500: "#b52b65",
    600: "#912251",
    700: "#6d1a3d",
    800: "#481128",
    900: "#240914",
  },
});

//* Theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[100],
            },
            background: {
              default: colors.darkPurple[700], //colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[100],
            },
            neutral: {
              dark: colors.primary[500],
              main: colors.secondary[500],
              light: colors.secondary[200],
            },
            background: {
              default: colors.white[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Cambria", "serif"].join(","), //CHANGING FROM: ["Source Sans Pro", "sans-serif"].join(",")
      fontSize: 12,
      h1: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// * Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark"); //Stores the state of dark or light mode

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};

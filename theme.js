import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "#FF0000",
      primaryLightHover: "#FF0000",
      primaryLightActive: "#FF0000",
      primaryLightContrast: "#FF0000",

      primary: "#635985",
      primaryBorder: "#FF0000",
      primaryBorderHover: "#FF0000",
      primarySolidHover: "$green700",
      primarySolidContrast: "#FF0000",
      primaryShadow: "#FF0000",

      secondary: "#635985",
      tertiary: "#443C68",
      quatary: "#393053",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      background: "#18122B",
      textWhite: "#FFFFFF",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

export default theme;

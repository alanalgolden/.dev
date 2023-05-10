import { Box } from "./Box";
import { Content } from "./Content";

export const Layout = ({ children }) => (
  <Box css={{ maxW: "100%" }}>
    {children}
    <Content />
  </Box>
);

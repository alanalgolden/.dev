import { Container, Navbar, Button, Link, Text } from "@nextui-org/react";
import React from "react";
import { VscGithub, VscTwitter } from "react-icons/vsc";

const Topbar = () => {
  return (
    <Navbar isBordered variant={"sticky"}>
      <Navbar.Content>
        <Navbar.Item>// Alana Golden</Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <VscGithub />
        </Navbar.Item>
        <Navbar.Item>
          <VscTwitter />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Topbar;

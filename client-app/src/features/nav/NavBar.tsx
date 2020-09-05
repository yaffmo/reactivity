import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="./assets/logo.svg"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivity NEW
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item header>
          <Button positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

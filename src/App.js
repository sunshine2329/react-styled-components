import React, { Component } from 'react';
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body{
    margin: 0;
    padding: 0;
  }
`
class App extends Component {
  render() {
    return (
      <Container>
        <Button sucess>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}
`;

const Anchor = Button.withComponent("a").extend`
  text-decoration: none;
`;

export default App;

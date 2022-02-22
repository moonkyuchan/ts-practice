import React, { useState } from "react";
import { Layout } from "antd";
import Navigation from "./layout/Header/Navigation/Navigation";
import "./App.css";
import styled from "styled-components";
import { testCreateContext } from "./context/Context";
import { test2CreateContext } from "./context/Context";
import Contents from "./pages/Contets";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  console.log("Render Test : App");
  const [test, setTest] = useState<boolean>(false);
  const [test2, setTest2] = useState<number>(1);
  return (
    <test2CreateContext.Provider value={{ test2, setTest2 }}>
      <testCreateContext.Provider value={{ test, setTest }}>
        <Layout>
          <StyledHeader>
            <Navigation />
          </StyledHeader>
          <Content>
            <Contents />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </testCreateContext.Provider>
    </test2CreateContext.Provider>
  );
};

const StyledHeader = styled(Header)<any>`
  background: ${({ theme }) => theme.redbase};
`;
export default App;

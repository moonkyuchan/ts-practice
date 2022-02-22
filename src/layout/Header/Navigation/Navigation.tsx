import React, { useContext } from "react";
import styled from "styled-components";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { testCreateContext } from "../../../context/Context";

const Navigation: React.FC = () => {
  console.log("Render Test : Navigation");
  const { test, setTest } = useContext(testCreateContext);

  const toggleTest = () => {
    setTest(!test);
  };

  return (
    <>
      <StyledMenu mode="horizontal">
        <Menu.Item key="1" onClick={toggleTest}>
          {test.toString()}
        </Menu.Item>
        <Menu.Item key="2">menu.2</Menu.Item>
        <Menu.Item key="3">menu.3</Menu.Item>
      </StyledMenu>
    </>
  );
};

interface StyledMenuProps {
  //readonly는 객체가 처음 생성될 때만 수정 가능?
  readonly margin?: number;
  readonly padding?: number;
}
const StyledMenu = styled(Menu)<StyledMenuProps>(({ theme }) => {
  return {
    marginLeft: "100px",
    background: `${theme.redbase}`,
  };
});
export default Navigation;

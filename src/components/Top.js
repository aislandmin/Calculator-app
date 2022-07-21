import React from "react";
import styled from "styled-components/macro";

const Top = ({ onClick }) => {
  return (
    <TopContainer className="top">
      <h1 translate="no" className="app-title">
        calc
      </h1>
      <div className="topRightContainer">
        <span className="label" translate="no">
          theme
        </span>
        <div className="toggleContainer">
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <SwitchButton className="switch-button" onClick={onClick}>
            <Toggle className="toggle"></Toggle>
          </SwitchButton>
        </div>
      </div>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  color: ${(props) => props.theme.topText};
`;

const SwitchButton = styled.button`
  background-color: ${(props) => props.theme.toggleBackground};
`;

const Toggle = styled.div`
  background-color: ${(props) => props.theme.toggle};
  transform: translateX(${(props) => props.theme.togglePosition});
`;

export default Top;

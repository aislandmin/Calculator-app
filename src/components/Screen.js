import React from "react";
import styled from "styled-components/macro";

const Screen = ({ value }) => {
  return (
    <ScreenInput
      className="screen"
      type="text"
      name="evalresult"
      value={value}
      readOnly
    ></ScreenInput>
  );
};

const ScreenInput = styled.input`
  background-color: ${(props) => props.theme.screenBackground};
  color: ${(props) => props.theme.screenText};
`;

export default Screen;

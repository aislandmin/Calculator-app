import React from "react";
import styled from "styled-components/macro";

const Keypad = ({ children }) => {
  return <KeypadDiv className="keypad">{children}</KeypadDiv>;
};

const KeypadDiv = styled.div`
  background-color: ${(props) => props.theme.toggleBackground};
`;

export default Keypad;

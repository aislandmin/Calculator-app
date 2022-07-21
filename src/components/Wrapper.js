import React from "react";
import styled from "styled-components/macro";

const Wrapper = ({ children }) => {
  return <WrapperDiv className="wrapper">{children}</WrapperDiv>;
};

const WrapperDiv = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
`;

export default Wrapper;

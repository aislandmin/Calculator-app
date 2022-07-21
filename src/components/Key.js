import React from "react";
import styled from "styled-components/macro";

const Key = ({ className, value, onClick }) => {
  if (className === "equals") {
    return (
      <KeyEquals
        type="button"
        translate="no"
        className={className}
        onClick={onClick}
        value={value}
      >
        {value}
      </KeyEquals>
    );
  } else if (className === "delete") {
    return (
      <KeyDelete
        type="button"
        translate="no"
        className={className}
        onClick={onClick}
        value={value}
      >
        {value}
      </KeyDelete>
    );
  } else if (className === "reset") {
    return (
      <KeyReset
        type="button"
        translate="no"
        className={className}
        onClick={onClick}
        value={value}
      >
        {value}
      </KeyReset>
    );
  } else {
    return (
      <KeyNum
        type="button"
        translate="no"
        className={className}
        onClick={onClick}
        value={value}
      >
        {value}
      </KeyNum>
    );
  }
};

const KeyNum = styled.button`
  background-color: ${(props) => props.theme.numbersBackground};
  color: ${(props) => props.theme.numbersText};
  box-shadow: 0 4px 0 0 ${(props) => props.theme.numbersShadow};
`;
const KeyDelete = styled.button`
  background-color: ${(props) => props.theme.deleteBackground};
  color: ${(props) => props.theme.deleteText};
  box-shadow: 0 4px 0 0 ${(props) => props.theme.deleteShadow};
`;
const KeyEquals = styled.button`
  background-color: ${(props) => props.theme.equalsBackground};
  color: ${(props) => props.theme.equalsText};
  box-shadow: 0 4px 0 0 ${(props) => props.theme.equalsShadow};
`;
const KeyReset = styled.button`
  background-color: ${(props) => props.theme.resetBackground};
  color: ${(props) => props.theme.resetText};
  box-shadow: 0 4px 0 0 ${(props) => props.theme.resetShadow};
`;

export default Key;

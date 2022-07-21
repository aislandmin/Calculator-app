import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Top from "./components/Top";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import Key from "./components/Key";

import { Theme1, Theme2, Theme3 } from "./theme/themes";
import { ThemeProvider } from "styled-components/macro";

const btnValues = [
  ["7", "8", "9", "DEL"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "/", "x"],
  ["RESET", "="],
];

// const operators = ["+", "-", "+", "/", "x"];
const operators = ["+", "-", "/", "x"];

function App() {
  const [theme, setTheme] = useState({ active: Theme1 });
  const [calc, setCalc] = useState({ value: "0" });

  const switchTheme = (event) => {
    event.preventDefault();
    setTheme({
      active:
        theme.active === Theme1
          ? Theme2
          : theme.active === Theme2
          ? Theme3
          : Theme1,
    });
  };

  const deleteHandler = (event) => {
    /* Set value to "0" if delete all the expression */
    setCalc({
      value: calc.value.length === 1 ? "0" : calc.value.slice(0, -1),
    });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setCalc({
      value: "0",
    });
  };

  const resolve = (expression) => {
    let pattern = /[\+\-\/\x]/;
    let index = expression.search(pattern);
    if (index === -1) return 0;

    const toNum = (strNum) => Number.parseFloat(strNum);
    const toStr = (num) => Number.parseFloat(num.toFixed(8)).toString();

    let biNums = expression.split(expression[index]);
    let result = 0;

    switch (expression[index]) {
      case "+":
        result = toNum(biNums[0]) + toNum(biNums[1]);
        break;
      case "-":
        result = toNum(biNums[0]) - toNum(biNums[1]);
        break;
      case "/":
        result = toNum(biNums[0]) / toNum(biNums[1]);
        break;
      case "x":
        result = toNum(biNums[0]) * toNum(biNums[1]);
        break;
      default:
        result = 0;
    }

    return toStr(result);
  };

  const resultHandler = (event) => {
    setCalc({
      value: resolve(calc.value),
    });
  };

  const operatorHandler = (event) => {
    let operator = event.target.value;
    const lastChar = calc.value[calc.value.length - 1];
    if (operators.includes(lastChar)) {
      setCalc({ value: calc.value.slice(0, -1) + operator });
    } else {
      setCalc({ value: calc.value + operator });
    }
  };

  const numberHandler = (event) => {
    let number = event.target.value;
    /* Initial zero replace by first input number */
    setCalc({
      value: calc.value === "0" ? number : calc.value + number,
    });
  };

  const periodHandler = (event) => {
    /* Avoid succesion of periods */
    setCalc({
      value:
        calc.value[calc.value.length - 1] === "." ||
        calc.value.indexOf(".") !== -1
          ? calc.value
          : calc.value + ".",
    });
  };

  return (
    <ThemeProvider theme={theme.active}>
      <Wrapper>
        <Top onClick={switchTheme} />
        <Screen value={calc.value} />
        <Keypad>
          {btnValues.flat().map((btn, index) => {
            return (
              <Key
                key={index}
                value={btn}
                className={
                  btn === "="
                    ? "equals"
                    : btn === "RESET"
                    ? "reset"
                    : btn === "DEL"
                    ? "delete"
                    : "number"
                }
                onClick={
                  btn === "DEL"
                    ? deleteHandler
                    : btn === "RESET"
                    ? resetHandler
                    : btn === "="
                    ? resultHandler
                    : operators.includes(btn)
                    ? operatorHandler
                    : btn === "."
                    ? periodHandler
                    : numberHandler
                }
              ></Key>
            );
          })}
        </Keypad>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

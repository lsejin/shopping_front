import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: "palevioletred";
  color: "white";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 160px;
  height: 50px;
  margin-left: 130px;
`;

function BUTTON({text}) {
  return (
    <div>
      <Button>{text}</Button>
    </div>
  );
}

export default BUTTON;
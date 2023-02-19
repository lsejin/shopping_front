import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  //margin: 10px;
  background: papayawhip;
  border: solid 1px;
  border-radius: 3px;
  width: 280px;
  height : 10px;
  //margin-left: 10px;
  text-indent: 25px;
  float : right;
  ::placeholder {
    color: palevioletred;
    text-indent: 25px;
  }
  background-image: url("https://cdn-icons-png.flaticon.com/512/254/254442.png");
  background-position: 3px 3.8px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
`;

const DIV = styled.div`
  margin : 10px;
  height : 40px;
`

function INPUT(props) {
  return (
    <DIV>
      <label>{props.txt} : </label>
      <Input {...props}/>
    </DIV>
  );
}

export default INPUT;
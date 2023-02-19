import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

//컴포넌트
import INPUT from "../components/inputbox";
import BUTTON from "../components/button";

const DIV = styled.div`
  border: solid 1px;
  border-radius : 10px;
  margin: -150px 0px 0px -200px;
  padding : 5px;
  width : 445px;
  position:absolute;
  top:30%;
  left:40%;
`;

const H1 = styled.div`
font-size : 40px;
font-weight : 700;
margin-left : 28%;
`;

const Login = () => {
  const navigate = useNavigate();
  const [inputEmail, setEmail] = useState("");
  const [inputPw, setPw] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

  // join 버튼 클릭 이벤트
  const loginClick = async (e) => {
    e.preventDefault();

    if(inputEmail === ""){
      Swal.fire({
        title: "안내",
        text: `이메일을 입력해주세요!`,
        showCancelButton: false,
        confirmButtonText: "확인",
      }).then(result => {
        if(result.isConfirmed) {
          return;
        }
      });
    }
    if(inputPw === ""){
      Swal.fire({
        title: "안내",
        text: `패스워드를 입력해주세요!`,
        showCancelButton: false,
        confirmButtonText: "확인",
      }).then(result => {
        if(result.isConfirmed) {
          return;
        }
      });
    }

    const encrypted = CryptoJS.AES.encrypt(inputPw, "secretKey").toString();
    try{
      const res = await axios.post('http://localhost:7070/login', {
        email : inputEmail,
        password : encrypted
      });
console.log(res.data);
      if(!res.data.success){
        Swal.fire({
          title: "안내",
          text: res.data.message,
          showCancelButton: false,
          confirmButtonText: "확인",
        }).then(result => {
          if(result.isConfirmed) {
            if(res.data.message.includes("존재하는 않는 회원입니다.")){
              navigate("/JOIN");
            }
            return;
          }
        });
      }else{
        Swal.fire({
          title: "안내",
          text: res.data.message,
          showCancelButton: false,
          confirmButtonText: "확인",
        }).then(result => {
          if(result.isConfirmed) {
            navigate("/MAIN");
            return;
          }
        });
      }
    }catch(e){

    }
  };
  

  return (
    <DIV>
      <H1>로그인</H1>
      <form onSubmit={loginClick}>
        <INPUT
          type="text"
          className="email"
          value={inputEmail}
          onChange={handleInputEmail}
          placeholder = "아이디(이메일)를 입력해주세요."
          txt="아이디(이메일)"
          />
          <INPUT
            type="password"
            className="passwd"
            value={inputPw}
            onChange={handleInputPw}
            placeholder = "패스워드를 입력해주세요."
            txt="패스워드"
          />
          <BUTTON className="submit" text="로그인!!!"></BUTTON>
      </form>
    </DIV>
  );
};

export default Login;
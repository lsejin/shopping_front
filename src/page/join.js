import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CryptoJS from 'crypto-js';
import DaumPostcode from 'react-daum-postcode';
import Swal from "sweetalert2";

//컴포넌트
import INPUT from "../components/inputbox";
import BUTTON from "../components/button";

const Join = () => {
  const [inputName, setName] = useState("");
  const [inputTel, setTel] = useState("");
  const [inputAdress, setAdress] = useState("");
  const [inputBirth, setBirth] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPw, setPw] = useState("");

  const [openPostcode, setOpenPostcode] = useState(false);

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputTel = (e) => {
    setTel(e.target.value);
  };
  const handleInputAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleInputBirth = (e) => {
    setBirth(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

const selectAddress = (data) => {
  // console.log(`
        //     주소: ${data.address},
        //     우편번호: ${data.zonecode}
        // `)
        console.log(data.userLanguageType);
        if(data.userLanguageType == 'K'){
          setAdress(data.address);
        }else {
          setAdress(data.addressEnglish);
        }
        
        setOpenPostcode(false);
}

const clickButton = (e) => {
  setOpenPostcode(current => !current);
} 

  // join 버튼 클릭 이벤트
  const joinClick = async (e) => {
    e.preventDefault();
    
    if(inputName === ""){
      Swal.fire({
        title: "안내",
        text: `이름을 입력해주세요!`,
        showCancelButton: false,
        confirmButtonText: "확인",
      });
      return;
    }
    if(inputAdress === ""){
      Swal.fire({
        title: "안내",
        text: `주소를 입력해주세요`,
        showCancelButton: false,
        confirmButtonText: "확인",
      });
      return;
    }
    if(inputTel === ""){
      Swal.fire({
        title: "안내",
        text: `연락처를 입력해주세요`,
        showCancelButton: false,
        confirmButtonText: "확인",
      });
      return;
    }
    if(inputBirth === ""){
      Swal.fire({
        title: "안내",
        text: `생년월일을 입력해주세요`,
        showCancelButton: false,
        confirmButtonText: "확인",
      });
      return;
    }
    if(inputEmail === ""){
      Swal.fire({
        title: "안내",
        text: `이메일을 입력해주세요`,
        showCancelButton: false,
        confirmButtonText: "확인",
      });
      return;
    }
    if(inputPw === ""){
      Swal.fire({
        title: "안내",
        text: `패스워드를 입력해주세요`,
        showCancelButton: false,
        confirmButtonText: "확인",
      });
      return;
    }

    const encrypted = CryptoJS.AES.encrypt(inputPw, "secretKey").toString();
    /*console.log("암호화 : ", encrypted);
    const bytes = CryptoJS.AES.decrypt(encrypted, "secretKey");
    const decrypted = bytes.toString(CryptoJS.enc.Utf8).toString();
    console.log("복호화 : ", decrypted);*/

    try{
      const res = await axios.post('http://localhost:7070/join', {
        name : inputName,
        tel : inputTel,
        adress : inputAdress,
        birth : inputBirth,
        email : inputEmail,
        password : encrypted
      });

      if(!res.data.success){
        Swal.fire({
          title: "안내",
          text: res.data.message,
          showCancelButton: false,
          confirmButtonText: "확인",
        });
      }else{
        Swal.fire({
          title: "안내",
          text: res.data.message,
          showCancelButton: false,
          confirmButtonText: "확인",
        });
      }
    }catch(e){

    }
    

  }
  

  return (
    <DIV>
      <H1>회원가입</H1>
      <form onSubmit={joinClick} action="/">
        <INPUT
                type="text"
                className="name"
                value={inputName}
                onChange={handleInputName}
                placeholder = "이름을 입력해주세요."
                txt="이름"
              />
              <INPUT
                type="text"
                className="adress"
                value={inputAdress}
                onChange={handleInputAdress}
                placeholder = "주소를 입력해주세요."
                txt="주소"
              />

              <ADDRESS type="button" value="주소검색" onClick={clickButton} />
              
              <INPUT
                type="text"
                className="tel"
                value={inputTel}
                onChange={handleInputTel}
                placeholder = "연락처를 입력해주세요."
                txt="연락처"
              />
              <INPUT
                type="text"
                className="birth"
                value={inputBirth}
                onChange={handleInputBirth}
                placeholder = "생년월일을 입력해주세요."
                txt="생년월일"
              />
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
        <BUTTON type="submit" text="가입하기!!!"></BUTTON>
      </form>
      
      {openPostcode && 
      <DIV2>
                <DaumPostcode 
                  onComplete={selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                  autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                  defaultQuery=''
              />
      </DIV2>}
      
    </DIV>
  );
};

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

const DIV2 = styled.div`
  border: solid 1px;
  border-radius : 10px;
  margin: -150px 0px 0px -200px;
  padding : 5px;
  width : 445px;
  height : 485px;
  position:absolute;
  top:30%;
  left:145%;
`;

const H1 = styled.div`
font-size : 40px;
font-weight : 700;
margin-left : 28%;
`;

const ADDRESS = styled.input`
width : 100px;
height : 30px;
border: solid 1px;
border-radius : 5px;
margin-left : 330px;
`;

export default Join;
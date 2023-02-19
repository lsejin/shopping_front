import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();

    const JoinPage = () => {
        navigate("/join")
    };

    const LoginPage = () => {
        navigate("/login")
    };

    return (
        <div>
            <h1>마이페이지</h1>
            <button size="large" onClick={JoinPage}>회원가입</button>
            <button size="large" onClick={LoginPage}>로그인</button>
        </div>
        );
};

export default Main;
import { useState, useEffect } from "react";

const Info = () => {
    const [name, SetName] = useState('');
    const [nickname, SetNickname] = useState('');

    useEffect(() => {
        console.log('랜더링이 완료되었습니다!');
        console.log({
            name, nickname
        });
    }, []);

    const onChangeName = e => {
        SetName(e.target.value);
    };

    const onChangeNickname = e => {
        SetNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    );
};

export default Info;
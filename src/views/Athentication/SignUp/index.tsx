import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

  // useState
  const [requestResult, setRequestResult] = useState<string>('');
  // signUpHandler
  const signUpHandler = () => {
      // data const
      const data =
      {
        "userEmail":"test@gmail.com",
        "userPassword":"test1234",
        "userPasswordCheck":"test1234",
        "userNickname":"Jhon Weck",
        "userPhoneNumber":"010-1234-5678",
        "userAddress":"USA New York",
        "userAddressDetail":"Cal been"
      };
      // post request
      axios.post('http://localhost:4000/api/auth/signUp', data)
      .then((rep) => {
        // 성공하면?
        setRequestResult('Successfull!');
      })
      .catch((err) => {
        // 실패하면?
        setRequestResult('Failed!');
      });
  };

  return (
    <div>
      <h3>{requestResult}</h3>
      {/* button 누를시 실행[함수] */}
      <button onClick={() => signUpHandler()}>회원가입</button>
    </div>
  );
}

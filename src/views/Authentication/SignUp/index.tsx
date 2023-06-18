import React, { useState } from 'react';

import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { signUpApi } from '../../../apis/idnex';

// interfac => props => setAuthView(data)
interface Props {
  setAuthView: (authView: boolean) => void,
};

export default function SignUp(props: Props) {

  // useState
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [userAddressDetail, setUserAddressDetail] = useState<string>('');

  // setAuthView 를 사용하기 위한 작업 => props로 전달받음
  const {setAuthView} = props;

  // signUpHandler
  const signUpHandler = async () => {
      // data const
      const data =
      {
        userEmail,
        userPassword,
        userPasswordCheck,
        userNickname,
        userPhoneNumber,
        userAddress,
        userAddressDetail,
      };
      
      // signUpResponse => api(http통신 => data)
      const signUpResponse = await signUpApi(data);

      // 만약 회원가입에 실패한다면 alert로 알려주기
      if(!signUpResponse) {
        alert('SignUp fail...');
        return;
      };

      // 만약 회원가입에서 결과가 실패한다면 alert로 알려주기
      if(!signUpResponse.result) {
        alert('SignUp fail...');
        return;
      };

      // 회원가입에 성공한다면 alert로 알려주기
      alert('Successful!');
      // 회원가입 성공했기에, view화면을(signUp) 보여주지 않음
      setAuthView(false);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
      <Box>
        <Typography variant='h4' style={{textAlign: 'center', color: '#55575A', fontWeight: '800'}}>
            SignUp
        </Typography>
      </Box>
      <Box height={'50vh'}>
        <TextField fullWidth label="Email" type="email" variant="standard" onChange={(e) => setUserEmail(e.target.value)} />
        <TextField fullWidth label="PW" type="password" variant="standard" onChange={(e) => setUserPassword(e.target.value)} />
        <TextField fullWidth label="PW Check" type="password" variant="standard" onChange={(e) => setUserPasswordCheck(e.target.value)} />
        <TextField fullWidth label="Nick Name" variant="standard" onChange={(e) => setUserNickname(e.target.value)} />
        <TextField fullWidth label="Phone Number" variant="standard" onChange={(e) => setUserPhoneNumber(e.target.value)} />
        <TextField fullWidth label="Address" variant="standard" onChange={(e) => setUserAddress(e.target.value)} />
        <TextField fullWidth label="Detail Address" variant="standard" onChange={(e) => setUserAddressDetail(e.target.value)} />
      </Box>
      {/* button 누를시 실행[함수] */}
      <Box width='100%'>
          <Button fullWidth onClick={() => signUpHandler()} variant='contained'>
          SignUp
          </Button>
      </Box>
      <Box width='100%' height='100%' mt={2} display='flex' justifyContent='center'>
          <Typography color='#55575A' fontWeight='400'>
            Do you already have an account? 
          </Typography>
          <Typography ml={1} onClick={() => setAuthView(false)} style={{cursor: 'pointer', color: '#3059B4', fontWeight: '800'}}>
              Login
          </Typography>
      </Box>
    </Card>
    
  );
}

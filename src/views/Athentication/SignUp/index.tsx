import React, { useState } from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function SignUp() {

  // useState
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [userAddressDetail, setUserAddressDetail] = useState<string>('');
  // signUpHandler
  const signUpHandler = () => {
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
      // post request
      axios.post('http://localhost:4000/api/auth/signUp', data)
      .then((rep) => {
        
      })
      .catch((err) => {
        
      });
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
      <CardContent>
        <Box>
          <TextField fullWidth label="Email" type="email" variant="standard" onChange={(e) => setUserEmail(e.target.value)} />
          <TextField fullWidth label="PW" type="password" variant="standard" onChange={(e) => setUserPassword(e.target.value)} />
          <TextField fullWidth label="PW Check" type="password" variant="standard" onChange={(e) => setUserPasswordCheck(e.target.value)} />
          <TextField fullWidth label="Nick Name" variant="standard" onChange={(e) => setUserNickname(e.target.value)} />
          <TextField fullWidth label="Phone Number" variant="standard" onChange={(e) => setUserPhoneNumber(e.target.value)} />
          <TextField fullWidth label="Address" variant="standard" onChange={(e) => setUserAddress(e.target.value)} />
          <TextField fullWidth label="Detail Address" variant="standard" onChange={(e) => setUserAddressDetail(e.target.value)} />
        </Box>
      </CardContent>
      <CardActions>
        {/* button 누를시 실행[함수] */}
        <Button fullWidth onClick={() => signUpHandler()} variant="contained">회원가입</Button>
      </CardActions>
    </Card>
    
  );
}

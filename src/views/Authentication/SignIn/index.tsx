import { Box, Button, Card, CardActions, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {useCookies} from "react-cookie";
import { useUserStore } from '../../../stores';
import { signInApi } from '../../../apis/idnex';

// interfac => props => setAuthView(data)
interface Props {
    setAuthView: (authView: boolean) => void,
  };

export default function SignIn(props: Props) {
    // useState => type : String, value : ''(빈문자열로 초기화)
    const [userEmail, setEmail] = useState<string>('');
    const [userPassword, setPassword] = useState<string>('');

    // useCookies => login을 하였는가를 check
    const  [cookies, setCookies] = useCookies();

    // setUser => 외부의 Data를 관리해주기 위한 것
    const {user, setUser} = useUserStore();

    // setAuthView 를 사용하기 위한 작업 => props로 전달받음
    const {setAuthView} = props;

    // signUpHandler 
    const signUpHandler = async () => {
        // email, password의 길이가 0인가를 판별
        if(userEmail.length === 0 || userPassword.length === 0) {
            alert("Email과 Password를 입력해 주세요.");
            return;
        };

        // data value => eamil, password[HTTP: Response]
        const data ={
            userEmail,
            userPassword
        };

        // API 통신
        const signInResponse = await signInApi(data);

        // Login fail시 message => 'Login fail...'
        if(!signInResponse) {
            alert("Login fail..."); 
            return;
        };

         // signInResponse data가 일치 하지 않으면 로그인 실패라고 로그 남기기
         if(!signInResponse.result) {
            alert("Login fail...");
            return;
        }

        // 성공하면 token, exprTime, user Data 정보를 보여줌
        const {token, exprTime, user} = signInResponse.data;
        // date type add
        const expires = new Date();
        // data type을 설정한 datetime을 표기하겠다는 의미임
        expires.setMilliseconds(expires.getMilliseconds + exprTime);

        // login이 되면 cookie로 흔적을 남겨줌[로그인이 되었는가 아닌가를 보기 위함]
        setCookies('token', token, {expires});
        // user Data의 값을 알아보기 위함
        setUser(user);
    };
  return (
    <Card sx={{minWidth: 275, maxWidth: "50vw", padding: 5}}>
        <Box>
            <Typography variant='h4' style={{textAlign: 'center', color: '#55575A', fontWeight: '800'}}>
                Login
            </Typography>
        </Box>
        <Box height={'50vh'}>
            <TextField 
                fullWidth 
                label="Email" 
                type='email' 
                variant='standard' 
                onChange={(e) => setEmail(e.target.value)} />

            <TextField 
                fullWidth
                label="Password"
                type='password'
                variant='standard'
                onChange={(e) => setPassword(e.target.value)}
            />
        </Box>
        <CardActions 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                flexDirection: 'column'
                }}>
            <Box width='100%'>
                <Button fullWidth onClick={() => signUpHandler()} variant='contained'>
                    Login
                </Button>
            </Box>
            <Box width='100%' height='100%' mt={2} display='flex' justifyContent='center'>
                <Typography color='#55575A' fontWeight='400'>
                    Are you not a new user? 
                </Typography>
                <Typography ml={1} onClick={() => setAuthView(true)} style={{cursor: 'pointer', color: '#3059B4', fontWeight: '800'}} >
                    SignUp
                </Typography>
            </Box>
        </CardActions>
    </Card>
  )
};

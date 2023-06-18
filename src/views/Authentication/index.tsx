import React, { useState } from 'react';

import Box from '@mui/material/Box';

import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Authentication() {

  // authView : true 이면 signUp을 보여주고, false 이면 signIn을 보여줌
  const [authView, setAuthView] = useState<boolean>(true);
  return (
    <>
      <Box display='flex' height='100vh'>
        <Box flex={1} display='flex' justifyContent='center' alignItems='center'></Box>
        <Box flex={1} display='flex' justifyContent='center' alignItems='center'>
          {authView ? (<SignUp setAuthView={setAuthView} />) : (<SignIn setAuthView={setAuthView} />)}
        </Box>
      </Box>
    </>
  )
}

import React, { useEffect, useState } from 'react';
import Navigation from '../../Authentication/Navigation';
import Authentication from '../../Authentication';
import BoardMain from '../../BoardMain';
import { useUserStore } from '../../../stores';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function MainLayout() {
  // useState
  const [boardResponse, setBoardResponse] = useState<string>('');
  // cookies
  const [cookies] = useCookies();
  // useStore
  const {user} = useUserStore();

  // getBoard => async
  const getBoard = async (token: string) => {
    // requestOption value
    const requestoption = {
      // headers : {token 보여주는 작업}
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    // response => http get method
    await axios.get('http://localhost:4000/api/board/', requestoption).then(
      (response => {
        // setBoardRespons => data
    setBoardResponse(response.data);
      })
    ).catch(err => null);
    
  };

  // useEffect => user
  useEffect(() => {
    // token
    const token = cookies.token;
    if(token) getBoard(token);
  }, [user])

  return (
    <>
        <Navigation />
        {boardResponse ? (<BoardMain />) : (<Authentication />)}
    </>
  )
}

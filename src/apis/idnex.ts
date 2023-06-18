import axios from "axios";

export const signInApi = async (data: any) => {

    // axios => http통신[signIn]
    const response= await axios.post("http://localhost:4000/api/auth/signIn", data)
    .catch(err => null);

    // response 가  null이면?
    if(!response) return null;

    // result value => response의 data를 받아옴
    const result = response.data;

    // return value => result를 반환함
    return result;
};

export const signUpApi = async (data: any) => {
    // axios => http통신[signIn]
    const response= await axios.post("http://localhost:4000/api/auth/signUp", data)
    .catch(err => null);

    // response 가  null이면?
    if(!response) return null;

    // result value => response의 data를 받아옴
    const result = response.data;

    // return value => result를 반환함
    return result;
};
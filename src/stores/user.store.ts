import { create } from 'zustand';

// user data값을 잘 불러오는가를 확인하기 위한 작업
interface UserStore {
    user: any; // default user값(현재 상태)
    setUser : (user: any) => void; // user 값을 받아오는 것
    remvoeUser: () => void; // user 값을 삭제하는 것
}

// userStore function은 생성될때 UserStore타입이 set parameter를 가지고
// user 상태는 null상태이며, 만약 login성공시에 user의 값을 받아와주는 setUser에게
// 값을 넣어주고 외부에 표현을 success상태의 값을 보여주고,
// 삭제되는 상태면 setUser의 값을 null값으로 표현하고 login이전의 상태로 표현해줌
const useStore = create<UserStore>(set => ({ // set parameter => user data value
    // user => null
    user: null, // user value는 null
    setUser: (user: any) => { // user data를 받아와주는 작업
        set(state => ({...state, user}));
    },
    remvoeUser: () => {
        set(state => ({...state, user: null})); // user data를 삭제해주는 작업
    }
}));

export default useStore; // 현재작업을 호출해주는 작업
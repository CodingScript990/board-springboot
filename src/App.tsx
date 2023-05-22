import './App.css';
import Athentication from './views/Athentication';

function App() {
  // useState
  //const [connection, setConnection] = useState<string>('');
  
  // connectionTest function
  /*
  const connectionTest = () => {
    // get connection
    axios.get('http://localhost:4000/')
    .then((rep) => {
      // set connection status
      setConnection(rep.data);
    })
    .catch((err) => {
      // error handling => message
      setConnection(err.message);
    });
  };

  // useEffect : 특정 state값이 실행될때 한번 실행시켜주는 역할
  useEffect(() => {
    // connectionTest callback
    connectionTest(); 
  }, []); // [] : 안에 값이 비어져 있으면 최초 1회 실행시만 call함

  */

  return (
    <Athentication />
  );
}

export default App;

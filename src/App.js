import './App.css';
import Spinner from './components/Spinner';
import WheelComponent from "react-wheel-of-prizes";
import Spin2 from './components/Spin2';
import { useState } from 'react';

function App() {

  const [winner, setWinner] = useState('');
  const [winnerFlag, setWinnerFlag] = useState(false);
  const [tryFlag, setTryFlag]=useState(false);

  const segments = [
    " 70% discount",
    " 10% discount",
    " 2% discount",
    " uber pass",
    "Try again",
    "  voucher"
  ];

  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000"
  ];
  const onFinished = (winner) => {
    setWinnerFlag(true);
    
    if(winner!== "Try again"){
      setTryFlag(false);
      setWinner(winner);
    } else {
      setTryFlag(true);
      setWinnerFlag(false);
    }
    

  };


  return (
    <div className='container'>
      
    <Spin2
      segments={segments}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      size={150}
      upDuration={100}
      downDuration={700}
    />
    {winnerFlag && <h3>Congratulations! You won {winner}</h3>}
    {tryFlag && <h3>Sorry No Luck! Please try again</h3>}
    </div>
  );
}

export default App;

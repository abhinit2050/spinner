import './App.css';
import Spinner from './components/Spinner';
import WheelComponent from "react-wheel-of-prizes";
import Spin2 from './components/Spin2';

function App() {

  const segments = [
    "won 70",
    "won 10",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher"
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
    console.log(winner);
  };


  return (
    <div className="App">
      
    <Spin2
      segments={segments}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      size={190}
      upDuration={100}
      downDuration={700}
    />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
import MyNavBar from "./components/NavBar"
import MyButtons from './components/Buttons'
import Results from './components/Results'

function App() {
  const [result, setResult] = useState(0);

  const increase = () => {
    setResult(result + 1);
  };

  const decrease = () => {
    setResult(result - 1);
  };

  return (
    <>
      <MyNavBar/>

      <div className="justify-content-center align-items-center w-100 h-100 d-flex p-5">
        <MyButtons onIncrease={increase} onDecrease={decrease} />
        <br></br>
      </div>
      <div className="justify-content-center align-items-center w-100 h-100 d-flex fs-3">
      <Results result={result} />
      </div>


    </>
  )
}

export default App

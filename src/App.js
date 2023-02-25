import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <button onClick={()=> setcount((prev)=> prev-1) }>-</button>
      {count}
      <button onClick={()=> setcount((prev)=> prev+1) }>+</button>
    </div>
  );
}

export default App;

import { useState, useRef } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('Steve');
  const refElement = useRef(' ')
  console.log(refElement)

  const clear = () => {
    setName('');
    refElement.current.focus()
  }

  const changeColour = () => {
  refElement.current.classList.add("red-text");
};


  {/*
  const changeColour= () =>{
    refElement.current.style.colour = 'red-text';

  };
*/}
  return (
    <>
      <h1>useRef</h1>
      <input ref={refElement} type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={clear}>Clear</button>
      <button onClick={changeColour}>Change Colour</button>
      </>
  )
}

export default App;


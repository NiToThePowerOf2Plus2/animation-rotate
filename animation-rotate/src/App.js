import './App.css';
import {useEffect, useRef} from "react";


function App() {
  let objRef1, objRef2, objRef3, objRef4, objRef5;
  objRef1 = useRef();
  objRef2 = useRef();
  objRef3 = useRef();
  objRef4 = useRef();
  objRef5 = useRef();
  const change = 10;
  let rotateDeg = 0;
  let fontSize = 50;
  let time = 15;
  function run(){
    setInterval(() => {
      rotateDeg += change;
      if(fontSize++ <= 133){
        objRef1.current.style.fontSize = `${fontSize}px`;
        objRef2.current.style.fontSize = `${fontSize}px`;
        objRef3.current.style.fontSize = `${fontSize}px`;
        objRef4.current.style.fontSize = `${fontSize}px`;
        objRef5.current.style.fontSize = `${fontSize}px`;
      }
      else{
        objRef1.current.style.transform = `rotateY(${rotateDeg}deg)`;
        objRef1.current.style.color = "tomato";
        /* objRef2.current.style.transform = `rotateY(${rotateDeg}deg)`;
        objRef3.current.style.transform = `rotateY(${rotateDeg}deg)`;
        objRef4.current.style.transform = `rotateY(${rotateDeg}deg)`;
        objRef5.current.style.transform = `rotateY(${rotateDeg}deg)`; */

      }
    
    }, time);

  }
  
  return (
    <div className="App">
      <div className="bg">
        <div className="border">
          <h1 className="obj" ref={objRef1}>H</h1>
          <h1 className="obj" ref={objRef2}>A</h1>
          <h1 className="obj" ref={objRef3}>L</h1>
          <h1 className="obj" ref={objRef4}>L</h1>
          <h1 className="obj" ref={objRef5}>O</h1>
        </div>
        <button className="btn" onClick={run}>🤍</button>
      </div>
    </div>
  );
}

export default App;
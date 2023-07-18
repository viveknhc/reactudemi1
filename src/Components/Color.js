import {  useState } from "react"

function Color() {
    const [color, setColor] = useState('red');
  
    const changeColor = () => {
      const newColor = color === 'red' ? 'green' : 'red';
      setColor(newColor);
    }
  
  
    return (
      <div className="">
        <h1 style={{ color }}>Color: {color}</h1>
        <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }
  
  export default Color;
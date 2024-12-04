import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#fff');
  const bgChager = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    setColor('#' + randomColor);
  };
  return (
    <div className='w-full h-screen'>
      <h1>Background Changer</h1>
      <p>Click on the button to change the background color.</p>
      <button className='btn cursor-pointer' onClick={bgChager}>
        Change Background
      </button>
    </div>
  );
}

export default App;


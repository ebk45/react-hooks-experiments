import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Button onClick={updateCounter}/>

      You failed {count} times.
    </div>
  );
}

export default App;

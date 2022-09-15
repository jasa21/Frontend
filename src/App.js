import './App.css';
import React, {useState} from "react";
import MyEditor from './MyEditor';

function App() {

  return (
    <div className="App">
      <h1>My Editor</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyEditor/>
    </div>
  );
}

export default App;

import {useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markDown, setMarkDown] = useState("welcome to markdown");
  return (
    <>
      <div className="center-div">
        <textarea className='left-side'
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}></textarea>
        <div className='right-side'>
        <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>

    </>
  );
}

export default App;

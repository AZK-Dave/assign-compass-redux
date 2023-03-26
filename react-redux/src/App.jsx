import './App.css'
import ComA from './components/ComA';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <ComA/>
    </div>
  )
}

export default App

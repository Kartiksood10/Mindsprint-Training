import { useEffect, useState } from 'react'
import Counter from './Components/Counter'
import Welcome from './Components/Welcome'
import FetchData from './Components/FetchData';
import Width from './Components/Width';
import Post from './Components/Activity/Post';

function App() {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');
  useEffect(()=>{
    console.log('use effect triggered');
  })
  return (
    <div>
      {/* <h3>Welcome to Vite+React</h3>
      <Counter />
      <input type='text' onChange={(e)=>setName(e.target.value)} />
      <h3>Welcome {name}</h3>
      <button onClick={()=> setFlag(!flag)}>{flag?'Hide':'Show'}</button>
      {flag && <Welcome />}
      <FetchData />
      <Width /> */}
      <Post />
    </div>
  )
}

export default App

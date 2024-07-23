import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Hello from './components/class';
import Forms from './components/form';
import StyleComp from './components/styleComp';
import Event from './components/event';
import Loops from './components/loops';
import { useState } from 'react';
import Counter from './components/counter';
import FormInput from './components/forminput';
import Register from './components/register';
import ToDo from './components/toDo';
import Child from './components/child';
import Parent from './components/parent';
import List from './components/props/list';

function App() {

  const [name,setName] = useState("kartik")

  const changeName = () => {

    setName("mindsprint")
  }
  return (
    <div className="App">
      <Header />
      <Loops />
      <h3>Welcome {name}</h3>
      <button onClick={changeName}>CHANGE</button>
      <hr />
      <Counter />
      <hr />
      <FormInput />
      <hr />
      <Register />
      <hr />
      <ToDo />
      <hr />
      <Parent />
      <Child />
      <hr />

      <List />
    </div>
  );
}

export default App;

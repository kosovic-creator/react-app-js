/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Ana Kosovic',
    age: 25,
  },
  {
    id: 2,
    name: 'Luka Kosovic',
    age: 24,
  },
  {
    id: 3,
    name: 'Janko Jankoivc',
    age: 30,
  },
  {
    id: 4,
    name: ' Marko Markovic',
    age: 28,
  },
];
function App() {
  const [ime, setIme] = useState(
    []);
  const [godine, setGodine] = useState('');
  return (
    <>
      {data.map((person) => (
<div key={person.id}>
  <div className='flex justify-left items-center space-x-3'>
    <h2 className='text-red-950 font-light text-2xl '>{person.name}</h2>
    <p>{person.age}</p>
  </div>


</div>


      ))}
      <div>
      <button className='bg-slate-400' onClick={() => setIme('Ana')}>Set Ime</button>
      <p>{ime}</p>
      </div>



    </>
  );
}

export default App;

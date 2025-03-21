/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';

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
  const [profil, setProfil] = useState(
    [{ naziv: 'marko', cijena: 30 }, { naziv: 'kosta', cijena: 30 }]);
  const [item, setItem] = useState([]);
  const [dozvola, setDozvola] = useState(false);

  const numIme = profil.length
  // console.log(numIme)
  const sumGodine = profil.reduce((acc, cur) => acc + cur.cijena, 0);

  useEffect(() => {
    console.log('Promjena imnema');
    localStorage.setItem('profil', JSON.stringify(profil));
  }, [profil]);
  useEffect(() => {
    localStorage.setItem('profil', JSON.stringify(profil));
    localStorage.setItem('naziv', JSON.stringify('LokalStorage'));
    const storage = localStorage.getItem('naziv');
    // alert(storage)
    //setDozvola(true);
  }, [profil]);
  return (
    <>
    <div className='App-header' >

  {/* {ime.map((item, index) => ( */}

  {dozvola && <h3>Dozvola</h3>}
      {data.map((person) => (
        <div key={person.id}>
          <div className='flex justify-left items-center space-x-3'>
            <h2 className='text-red-950 font-light text-2xl '>{person.name}</h2>
            <p>{person.age}</p>
          </div>
        </div>
      ))}
      <button className='bg-slate-400' onClick={() => { setProfil(profil => [...profil, { naziv: 'sofija', cijena: 88 }]); setDozvola(true); }}>SetIProfilUseState</button>
      <button className='bg-slate-400' onClick={() => setItem([...item, 'ana'])}>Set Ana array useEfect</button>
      <p>{item}</p>

      {profil.map((item, index) => (
        <p key={index}>{item.naziv} - {item.cijena}</p>
      ))}
      <p className='text-red-800'>Ukupno godina:   {sumGodine}</p>

    </div>

    </>
  );
}

export default App;

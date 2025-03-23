/* eslint-disable no-const-assign */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useState, useReducer } from 'react'

function StateReducer() {
    const [item, setItem] = useState();
    const initialState = {
        agent: 'Archer',
        oblast: 'osiguranje',
        bod: 100,
    };
    const reducer = (state, action) => {
        switch (action.type) {
          case 'dodaj':

              return {
                ...state,
                bod: state.bod + 10,
                agent: 'Drasko',
                oblast: 'it'
              };
              default:
                return state;
          }
      };

      const [state, dispatch] = useReducer(reducer, initialState);

     const state1  = reducer(state, { type: 'default' });
      console.log(state1);
    return (
        <>
            <button className='btn' onClick={() => setItem('Hello')}>State</button>
            <h3>{item}</h3>
            <button className='btn' onClick={() => dispatch({ type: 'dodaj' })}>Reducer</button>
           <div className='flex-row  m-auto'>

           <h4 className='m-auto ' >bod:{state1.bod}</h4>
           <h4 className='m-auto '>Ime: {state1.agent}</h4>
           <h4 className='mt-auto '>Oblast: {state1.oblast}</h4>
            </div>

        </>
    )
}

export default StateReducer
/* eslint-disable no-unused-vars */
import React from 'react'

export default function AppReducer() {
  // const reducer = (state, action) => {
//   if (action === 'DARKEN') {
//     return state + 'er';
//   }
//   if (action === 'LIGHTEN') {
//     return state.replace('er', '');
//   }
//   return state;
// };

// let dark = 'dark';
// dark = reducer(dark, 'DARKEN');
// log(dark);
// dark = reducer(dark, 'LIGHTEN');
// dark = reducer(dark, 'LIGHTEN');
// log(dark);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'DARKEN':
        if (state.agent === 'Archer' && state.turtleneckType === 'tactical') {
          return {
            ...state,
            turtleneckBlackness: state.turtleneckBlackness + 10,
          };
        }
        if (state.agent !== 'Archer') {
          return state;
        }
        break;
      case 'LIGHTEN':
        return state;
      default:
        return state;
    }
    return state;
  };

  let state = {
    agent: 'Archer',
    turtleneckType: 'tactical',
    turtleneckBlackness: 100,
  };

  state = reducer(state, { type: 'DARKEN' });
  console.log(state);

  return (
    <div>AppReducer</div>
  )
}

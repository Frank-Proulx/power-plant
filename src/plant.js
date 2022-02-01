// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state, 
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

export const changeState = (prop1, prop2) => {
  return (value1, value2) => {
    return (state) => ({
      ...state,  
      [prop1] : (state[prop1] || 0) + value1,
      [prop2] : (state[prop2] || 0) + value2
    })
  }
}

// We create four functions using our function factory. We could easily create many more.



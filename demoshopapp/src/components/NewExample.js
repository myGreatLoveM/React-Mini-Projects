import React, { useState } from 'react'

const NewExample = () => {
  const initialState = {
    firstKey: 'empty',
    secondKey: 'empty',
    thirdKey: 'not empty',
  }

  const [state, setState] = useState(initialState)

  const withPrevState = () => {
    setState((prevState) => ({...prevState, secondKey: 'not empty'}))
  }

  return (
    <div>
      <p>First key: {state.firstKey}</p>
      <p>Second key: {state.secondKey}</p>
      <p>Third key: {state.thirdKey}</p>

      <button onClick={withPrevState}>
        Update with prevState  </button> <br />

      <button onClick={ () => { setState( (prevState) => ({...prevState, secondKey: 'no empty'}) ) } }> Update without prevState </button> <br /> 


      <button onClick={ () => { setState(initialState) } }>Reset</button> <br />
    </div>
  )
}

export default NewExample

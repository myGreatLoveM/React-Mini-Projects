import React, { useState } from 'react'


const Example = () => {

    const [state, setState] = useState(
        { count: 0, text: '' }
    )
    
    function countIncrement(){
        setState(
                prevState => (
                    {...prevState, count: prevState.count + 1}
                )
        )
    }

    function textChangeHandler(event) {
        setState(
            prevState => (
                {...prevState, text: event.target.value}
            )
        )
    }


  return (
    <div>
        <p>Count: {state.count}</p>
        <button onClick={countIncrement}>Click Me</button>
        <button onClick={ () => { setState( ( prevState => ({...prevState, count: 0}) ) ) } }>Reset</button>
        <br />
        <input type="text" onChange={textChangeHandler} />
        <p>Text: {state.text}</p>

    </div>
  )
}

export default Example
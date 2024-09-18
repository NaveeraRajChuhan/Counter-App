import React, { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0)
  function addcounter() { setcounter(counter +1) }

  function minescounter() { setcounter(counter - 1) }
  return (<>
    <div>{counter}</div>
    <button onClick={addcounter}>click</button>
    <button onClick={minescounter}>Maines counter</button>
  </>

  )
}

export default App

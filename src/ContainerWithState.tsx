import { useState } from "react";


export const ContainerWithState = () => {
    const [x, setX] = useState(0);

    // const [numInInput,setNumInInput] = useState(10);


    // const setValue = () => {
    //     setX(numInInput);
    // }
 
    return <div>
        {/* <span>{numInInput}</span> */}
        <p onMouseEnter={() => setX(x + 1)}>Pippo</p>
        <button onClick={() => setX(x + 1)}>Increment</button>
        <span>{x}</span>
        <button onClick={() => setX(x - 1)}>Decrement</button>
        <button onClick={() => setX(0)}>Reset</button>
        {/* <button onClick={setValue}>Set</button> */}
        <input onChange={(event) => setX(Number(event.target.value))} id="inputValue" defaultValue={x} type="number"></input>
    </div>
}


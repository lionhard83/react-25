import { useRef, useState } from "react"


export const ExampleWithArray = () => {
    const [names, setNames] = useState<string[]>(['pippo', 'caio'])
    const ref = useRef<HTMLInputElement>(null);

    const addElement = () => {
        setNames([...names, ref!.current!.value]);
        ref!.current!.value = '';
        ref!.current!.focus();  
    }
    
    return (<>
        <input  ref={ref}  onKeyDown={(event) => event.key === 'Enter' && addElement()} ></input>
        <button onClick={addElement}>Add</button>
        {names.map(item => <p>{item}</p>)}
    </>)
}
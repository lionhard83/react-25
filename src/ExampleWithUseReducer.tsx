import { useReducer } from "react";

export type Action = {
    type: "sub" | "add"| "clean";
}

const reducer = (state: number[], action: Action) => {
    switch (action.type) {
        case "add": return state.length === 0 ? [0] : [...state, Number((state[state.length -1] + Math.random()).toFixed(2))]
        case "sub": return state.length === 0 ? [0] : [...state, Number((state[state.length -1] - Math.random()).toFixed(2))]
        case "clean": return []
        default: return []
    }
}



export const ExampleWithUseReducer = () => {
    const [array, setArray] = useReducer(reducer, []);

    return (<>
        <button onClick={() => setArray({type: 'add'})}>Add</button>
        <button onClick={() => setArray({type: 'sub'})}>Sub</button>
        <button onClick={() => setArray({type: 'clean'})}>Clean</button>
        <ul>
            {array.map(item => <li>{item}</li>)}
        </ul>
    </>)
}
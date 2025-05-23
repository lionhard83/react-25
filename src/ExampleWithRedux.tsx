import { Provider, useDispatch, useSelector } from "react-redux"
import { State, store } from "./redux/store"
import { increment, decrement } from "./redux/counterSlice"



export const ExampleWithRedux = () => {


    return(<Provider store={store}>
        <Sample1></Sample1>
        <Sample2></Sample2>
        <Sample3></Sample3>
    </Provider>)
}

export const Sample1 = () => {
    const dispatch = useDispatch()
    return (<>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>)
}

export const Sample2 = () => {
    const dispatch = useDispatch()
    return (<>
        <button onClick={() => dispatch(increment())}>Increment</button>
    </>)
}
export const Sample3 = () => {
    const counter = useSelector((state: State) => state.counter.value)
    return <>{counter}</>
}
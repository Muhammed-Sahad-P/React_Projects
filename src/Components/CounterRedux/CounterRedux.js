import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementbyValue, increment, incrementbyValue, reset } from "../../Redux/counterSlice"

const CounterRedux = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={()=>dispatch(increment())}>increment</button>
                <button onClick={()=>dispatch(decrement())}>decrement</button>
                <button onClick={()=>dispatch(reset())}>reset</button>
                <button onClick={()=>dispatch(incrementbyValue(5))}>increment by 5</button>
                <button onClick={()=>dispatch(decrementbyValue(5))}>decrement by 5</button>
            </div>
        </div>
    )
}

export default CounterRedux;
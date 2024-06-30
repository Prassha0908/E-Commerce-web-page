// import { useState } from "react";

// function Counter() {
//     const [count, setCount] = useState(5)

//     function Increment() {
//         console.log('increment');
//         setCount(count + 1)

//         console.log(count);
//     }
//     // function Decrement() {

//     //     if (count == 0) {
//     //         setCount(0);
//     //     }
//     //     else {
//     //         setCount(count - 1);
//     //     }
//     // }
//     return (
//         <>
//             <div>Counter : {count}</div>
//             {/* <button onClick={Increment} >Increment</button> */}
//             {/* <button onClick={Decrement} className="dec">Decrement</button> */}
//         </>
//     );
// }
// export default Counter

import { useContext, useState } from "react"
import { Countercontext } from "../contexts/counter"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../reducers/counterSlice"

function Counter() {
    // const {increment} = useContext(Countercontext)
    
    const count = useSelector((state) => state.counter.count)
    // console.log(count)
    const [val, setVal] = useState()

    const dispatch = useDispatch()
    const handleIncrement = () => {
        console.log(val)
        if(val){
            dispatch(incrementByValue(parseInt(val)))
        }
        else{
        dispatch(increment())
        }
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleChange = (e) => {
       setVal(e.target.value)
        // dispatch(incrementByValue())
    }
    return (
        <>
            <div>Counter : {count}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <br />
            <input type="text" value={val} onChange={handleChange}/>
            

        </>
    )
}
export default Counter
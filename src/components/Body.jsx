import { Fragment } from "react"
import { useState } from "react"

function Body(props) {
    const[dept, setDep] = useState('AI')

    function Deptchange(e){
        setDep(e.target.value)
    }

    console.log(props)
    return (
        <Fragment>
            <div>Body Component</div>

            <p>name : {props.name} </p>
            <p>age : {props.age1}</p>
             Dept : <input type="text" name="" value={dept} onChange={Deptchange} id="" />
             <p>{props.name} is studing {dept}</p>
             
        </Fragment>
    )
}
export default Body






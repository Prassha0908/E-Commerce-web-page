import { useContext, useState } from "react"
import { Themecontext } from "../contexts/theme"
import { Countercontext } from "../contexts/counter"
function Themebtn() {
    const {theme, toggletheme} = useContext(Themecontext)

    const {count, Increment} = useContext(Countercontext)

    return(
        <>
            <button onClick={()=>{toggletheme();Increment()}}>{theme}</button>
            
        </>
    )
}
export default Themebtn

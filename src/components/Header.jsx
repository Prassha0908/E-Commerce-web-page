import Themebtn from "./Themebtn"
import Counter from "./Counter"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
function Header() {
    const cartItems = useSelector((state) => state.cart.items)


    // const handleCategorySelection = (e) => {
    //     props.setSelection(e.target.value)
    // }
    return (
        <header className="cont">

            <img className="lo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8zLnV-drmmKIrlVUZGXbyJFNvVSyZXhCBQ&s" alt="logo"></img>



            <div className="menu">

                {/* < div className="top">
                        <div >Select Category
                            <select onChange={handleCategorySelection} className="topbar">

                                {props.category.map((c) => <option value={c}>{c}</option>)}
                            </select>
                        </div>

                    </div> */}


                <Link to="/cart" className="cart-img-flex">
                    <img className="cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptqOTS1J7rj0Ai908aewzTz81ltd_8HhftA&s" alt="" /> {cartItems.length}</Link>
                <Link to="/home" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contack">Contact</Link>
                <Themebtn />

            </div>
        </header>
    )
}
export default Header
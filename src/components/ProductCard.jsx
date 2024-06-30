import { useDispatch } from "react-redux"
import { itemAdded } from "../reducers/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductCard = (props) => {
    console.log(props.product)
    const {title , description, price, image,category } = props.product || {}
    
    const dispatch = useDispatch()
    const addItems = () => {
        dispatch(itemAdded(props.product))
        toast.success("Item added")
    }
    return (
        <div className="main-card"> 
        <div className="card">

            <img src={image} className="product"/>
            <div className="title">{title}</div>
            <div className="des"> <b>Description :</b> {description}</div>
            <div><b>Amount :</b> ${price}</div>
            <button className="cart-btn" onClick={addItems}>Add to Cart</button>
            
        </div>
        </div>
    )

}
export default ProductCard
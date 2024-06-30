import { useDispatch } from "react-redux"
import { qnAdd, itemDeleted , qnDel} from "../reducers/cartSlice"
import { toast } from "react-toastify"

const Cartitem = (props) => {

    const {id,title ,price, image, quantity} = props.item
    const dispatch = useDispatch()
    const deleteItem = () =>{
        dispatch(itemDeleted(id))
        toast.success("Items removed!!")
    }
    const quantityAdd = () => {
        dispatch(qnAdd({id,amount:1}));
        toast.info("Quantity added by 1" )
    }
    const quantityDel = () => {
        dispatch(qnDel({id,amount :1}));
        toast.info("Quantity removed by 1" )
    }
    
    return(
        <div className="card-pg">
            <img src={image} className="product"/>
            <div className="title">{title}</div>
            <div className="amt"><b>Amount :</b> ${price}</div>
            <div className="quantity">
                <button className="qnt" onClick={quantityAdd}>+</button>
                {quantity}
                <button className="qnt" onClick={quantityDel}>-</button>
            </div>
            <div className="tot">
                <b>Total Amount</b> <div>${quantity * price}</div>
            </div>
            <button onClick={deleteItem}>Remove</button>
        </div>
    )
}
export default Cartitem
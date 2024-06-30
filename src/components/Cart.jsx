import { useSelector } from "react-redux"
import Cartitem from "./Cartitem"
const Cart = () => {
    const items = useSelector((state) => state.cart.items)
    return (
        <>
            {/* <div>Cart</div> */}
            {items.map((item) => (
                <Cartitem key={item.id} item={item} />)

            )}
            {/* <div>{JSON.stringify(cartItems)}</div> */}
        </>
    )
}
export default Cart
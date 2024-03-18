import CustomButton from "./Custombutton";
import { useDispatch } from "react-redux";
import { removeItem, incrementItem, decrementItem } from '../Redux/ProductSlice'


const CartProduct = ({ item }) => {

    const dispatch = useDispatch()

    const deleteItem = (item) => {
        dispatch(removeItem(item.id))
    }

    const addItem = (item) => {
        dispatch(incrementItem(item))
    }

    const reduceItem = (item) => {
        dispatch(decrementItem(item))
    }
    return (
        <div className="cart-container">
            <div className="row">
                <div className="col-lg-2 col-sm-3 cartimg">
                    <img src={item.thumbnail} />
                </div>
                <div className="col-lg-10 col-sm-9 p-4">
                    <div className="product-description">{item.description}</div>
                    <div className="d-flex justify-content-between">
                        <div className="col-lg-2 col-sm-4 d-flex justify-content-between">
                            <div><CustomButton btnStyle={"product-incrementbtn"} title={"-"} btnonClick={() => { reduceItem(item) }} /></div>
                            <div className="product-quantity">{item.quantity}</div>
                            <div><CustomButton btnStyle={"product-decrementbtn"} title={"+"} btnonClick={() => { addItem(item) }} /></div>
                        </div>
                        <div className="col-lg-2 col-sm-3 mt-2">
                            <div className="product-price">$ {item.price}</div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="item-total">
                            Item Total : {item.price} x {item.quantity} = $ {item.price * item.quantity}
                        </div>
                        <div><CustomButton btnStyle={"product-deletebtn"} title={"Delete"} btnonClick={() => { deleteItem(item) }} /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CartProduct;
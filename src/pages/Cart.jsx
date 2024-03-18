import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
    const products = useSelector((state) => state.cart.products)

    return (
        <Fragment>
            <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">My Bag</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                products.map((item, index) => {
                                    return (
                                        <div>
                                            <CartProduct item={item}/>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div class="modal-footer">
                            <div className="bag-total">Bag Total = $ {products.reduce((sum, item) => sum + item.quantity * item.price, 0)}</div>
                            <button type="button" class="btn btnbgcolor" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Cart;
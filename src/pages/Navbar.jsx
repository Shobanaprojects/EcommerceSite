import { Fragment } from "react";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CustomButton from "./Custombutton";
import Cart from "./Cart";
const Navbar = () => {

    const products = useSelector((state) => state.cart.products)

    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg bg-color">
                <div class="container">
                    <a class="navbar-brand fs-2" href="#">Trendy Traverse</a>
                    <div className="d-xl-none margin-left">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link" aria-disabled="true">  <FavoriteBorderIcon /> <ShoppingCartOutlinedIcon /></a>
                            </li>
                            <CustomButton btnStyle="addtocart-count" title={products.reduce((sum, item) => sum + item.quantity, 0)} dataToggle="modal" dataTarget="#cartModal" />
                        </ul>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span><DehazeIcon/></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Laptop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mobile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home decor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Beauty</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <div className="d-none d-xl-block d-xxl-none">
                                <li class="nav-item">
                                    <a class="nav-link" aria-disabled="true">  <FavoriteBorderIcon /> <ShoppingCartOutlinedIcon /></a>
                                </li>
                                <CustomButton btnStyle="addtocart-count" title={products.reduce((sum, item) => sum + item.quantity, 0)} dataToggle="modal" dataTarget="#cartModal" />
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            <Cart />
        </Fragment>
    )
}
export default Navbar;
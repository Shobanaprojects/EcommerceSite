import { Fragment } from "react";
import CustomButton from "./Custombutton";
import { useDispatch } from 'react-redux';
import { storeProducts } from '../Redux/ProductSlice'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const ProductList = ({ item }) => {
    const dispatch = useDispatch()
    const addTocart = () => {
        dispatch(storeProducts({
            id: item.id,
            title: item.title,
            thumbnail: item.thumbnail,
            price: item.price,
            description: item.description,
            quantity: 1
        }))
    }

    return (
        <Fragment>
            <div className="product-container img-thumbnail">
                <div className="productimg-container">
                    <img src={item.thumbnail} alt="No image found" />
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <div className="lh-1 text-wrap sm-f-12">{item.title}</div>
                        <div className="fw-semibold">$ {item.price}</div>
                    </div>
                    <div className="float-end">
                        <div className="d-none d-sm-block">
                            <CustomButton title={"Add cart"} btnStyle={"btn btnbgcolor btn-sm text-nowrap"} btnonClick={addTocart} />
                        </div>
                        <div className="d-block d-sm-none">
                            <button className="btn btnbgcolor btn-sm text-nowrap" onClick={addTocart}>
                                <span><LocalMallOutlinedIcon /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ProductList;
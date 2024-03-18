import { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
    const [data, setData] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [filterpriceItem, setfilterpriceItem] = useState("")


    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json()
        setData(result.products)
    }

    const onSearchdata = (e) => {
        setSearchItem(e.target.value)
    }
    const getProductprice = (e) => {
        setfilterpriceItem(e.target.value)
    }

    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="row">
                    <h2 className="text-center fw-bold mt-5">Welcome to shop</h2>
                    {/* Tablet and Laptop view  */}
                    <div className="d-none d-sm-none d-md-block">
                        <div className="productsort-container mt-4 d-flex justify-content-between border border-end-0 border-start-0">
                            <div className="mt-2">30 Items Found</div>
                            <div>
                                <input className="search-bar" onChange={onSearchdata} type="text" placeholder="Search..." autoFocus />
                                <select className="sortby-price" onChange={getProductprice}>
                                    <option>-- Sort by --</option>
                                    <option value="low">Lowest Price</option>
                                    <option value="high">Highest Price</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Mobile view  */}
                    <div className="d-block d-sm-none">
                        <div className="productsort-container mt-4 d-flex justify-content-between border border-end-0 border-start-0">
                            <div className="mt-2">
                                <input className="search-bar" onChange={onSearchdata} type="text" placeholder="Search..." autoFocus />
                            </div>
                            <div>
                                <select className="sortby-price" onChange={getProductprice}>
                                    <option>-- Sort by --</option>
                                    <option value="low">Lowest</option>
                                    <option value="high">Highest</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {
                        data.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase())).filter((item) => {
                            if (filterpriceItem === "low") {
                                return item.price > 0 &&
                                    item.price <= 100
                            } else if (filterpriceItem === "high") {
                                return item.price > 100 &&
                                    item.price <= 2000
                            } else {
                                return true
                            }
                        }).map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 col-6">
                                    <ProductList item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default Home;
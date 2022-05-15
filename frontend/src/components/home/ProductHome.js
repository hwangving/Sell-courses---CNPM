import { useContext } from "react"
import { GlobalState } from "../../GlobalState"
import Banner from "../banner/Banner"
import ProductItem from "../MainPage/Products/ProductItem"
import { Button } from "@mui/material"
import Loading from "../MainPage/support/Loading"
import Advertise from "../ads/ads"

export default function ProductHome() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [result] = state.productsAPI.result
    const [page, setPage] = state.productsAPI.page
    // if(products.length ===0) return null   

    return (
        <div className="main">
            <div>
                <Banner />
            </div>
            <div className="container">
                <div className="container__item" style={{ marginTop: '30rem' }}>
                    <h1 style={{ padding: '2rem 0', fontFamily: 'system-ui' }}>Lộ trình học lập trình</h1>
                    {
                        products.length > 0
                            ? (<div className="product__home--container">
                                {
                                    products.map((product) => {
                                        return (
                                            <ProductItem key={product._id} product={product} />
                                        )
                                    })
                                }
                            </div>)
                            : (<Loading />)}

                </div>
            </div>
        </div>
    )
}

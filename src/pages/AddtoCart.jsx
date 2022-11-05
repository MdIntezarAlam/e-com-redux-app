import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/product.actions'
import { addToCart } from '../redux/actions/cart.actions'
import '../styles/addtoCart.css'


const AddtoCart = () => {
    const { productId } = useParams()
    console.log('product details: ', productId)
    const dispatch = useDispatch()
    const { selectedProduct, isLoading } = useSelector((state) => state.productReducer)
    console.log("product details", productId, selectedProduct)

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [dispatch]);

    if (isLoading) return <div className='details_container'>Loading...</div>
    return (
        <div className='add_cart'>
            <div className='add_box'>
                <div className='left'>
                    <div>
                        <h5>Title:{selectedProduct.title}</h5>
                        <div className='cart_images'>
                            <img src={selectedProduct.image} alt='cart' className='cart_img' />
                        </div>
                        <span className='cart_description'>Description <br />{selectedProduct.description}</span>
                    </div>
                </div>

                <div className='right'>
                    <h3>Payment Details</h3>
                    <div className='add_price'>
                        <span>MRP Total</span>
                        <span> ₹ {selectedProduct.price}</span>
                    </div>
                    <div className='add_price'>
                        <span>Product Discount</span>
                        <span>₹ 100</span>
                    </div>
                    <div className='add_price'>
                        <span>Total Amount</span>
                        <span>{selectedProduct.price} - 100</span>
                    </div>
                    <div className='carts_btn'>
                        <button className='place_order'>Place Order</button>
                        <button className='remove_order'>Remove from cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddtoCart


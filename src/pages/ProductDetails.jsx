
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/product.actions'
import { addToCart } from '../redux/actions/cart.actions'
import '../styles/product_details.css'


const ProductDetails = () => {
  const { productId } = useParams()
  console.log('product details: ', productId)
  const dispatch = useDispatch()
  const { selectedProduct, isLoading } = useSelector((state) => state.productReducer)
  console.log("product details", productId, selectedProduct)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch]);

  const addToCart = () => {
    if (selectedProduct) {
      dispatch(getProductById(productId))
      /**
       * Create cartRreducer, cartActionTypes, and create actions such as getAllCartItems, add to cart, remove from cart
       *  Apne se karna, agar nahi hua to kal dekhenge t, reducer me check karne ke liye
       * window.store.getState() use karna
       */
    }
  }

  if (isLoading) return <div className='details_container'>Loading...</div>

  return (
    <div className='pro_container'>
      {!selectedProduct ? <p>Product details couldn't find!</p> : <div className='pro_box'>
        <div className='details_Card'>
          <img src={selectedProduct.image} className="details_img" />
          <div className='details_right'>
            <div className='details_right_box'>
              <h1 className='details_title'>Model: {selectedProduct.title}</h1>
              <div className='details_price'>Price: ₹ {selectedProduct.price}</div>
              <div className='details_category'>Category: {selectedProduct.category}</div>
              <div className='details_description'>Description: <br /> {selectedProduct.description}</div>
              <Link to={`/addtocart/${productId}`}>
                <button className='details_btn' onClick={addToCart}>+ Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default ProductDetails















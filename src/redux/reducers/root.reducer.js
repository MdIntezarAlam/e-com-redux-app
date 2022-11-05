import { combineReducers } from "redux";
import { productReducer } from "../reducers/product.reducer"
import { cartReducer } from '../reducers/cart.reducer'

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

export default rootReducer
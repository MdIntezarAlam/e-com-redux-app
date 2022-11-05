import axios from 'axios'
import { API_BASE_URL, productActionTypes } from "../../utils/constants";

export const getAllCartItems = () => {
    return async dispatch => {
        dispatch({
            type: productActionTypes.ADD_TO_CART_PENDING,
        });
        try {
            const res = await axios.get(`${API_BASE_URL}/products`)
            dispatch({
                type: productActionTypes.ADD_TO_CART_SUCCESS,
                payload: {
                    data: res.data
                }
            });
        } catch (error) {
            dispatch({
                type: productActionTypes.ADD_TO_CART_FAILED,
                payload: {
                    message: "Something went wrong!"
                }
            });
        }
    }
}

// export const addToCart = (productId) => {
//     return async dispatch => {
//         dispatch({
//             type: productActionTypes.GET_PRODUCT_BY_ID_PENDING,
//         });
//         try {
//             const res = await axios.get(`${API_BASE_URL}/products/${id}`)
//             console.log("RESPONSE: ", res)
//             const product = res.data;
//             dispatch({
//                 type: productActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
//                 payload: {
//                     data: res.data
//                 }
//             });
//         } catch (error) {
//             dispatch({
//                 type: productActionTypes.GET_PRODUCT_BY_ID_FAILED,
//                 payload: {
//                     message: "Something went wrong!"
//                 }
//             });
//         }
//     }
// }

export const addToCart = (productId) => {
    return async dispatch => {
        dispatch({
            type: productActionTypes.ADD_TO_CART_PENDING,
        });
        try {
            const res = await axios.get(`${API_BASE_URL}/products/${productId}`)
            console.log("RESPONSE: ", res)
            const product = res.data;
            dispatch({
                type: productActionTypes.ADD_TO_CART_SUCCESS,
                payload: {
                    data: res.data
                }
            });
        } catch (error) {
            dispatch({
                type: productActionTypes.ADD_TO_CART_FAILED,
                payload: {
                    message: "Something went wrong!"
                }
            });
        }
    }
}
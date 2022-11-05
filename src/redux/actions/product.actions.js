import axios from 'axios'
import { API_BASE_URL, productActionTypes } from "../../utils/constants";

//display all product
export const getAllProducts = () => {
    return async dispatch => {
        dispatch({
            type: productActionTypes.GET_ALL_PRODUCTS_PENDING,
        });
        try {
            const res = await axios.get(`${API_BASE_URL}/products`)
            dispatch({
                type: productActionTypes.GET_ALL_PRODUCTS_SUCCESS,
                payload: {
                    data: res.data
                }
            });
        } catch (error) {
            dispatch({
                type: productActionTypes.GET_ALL_PRODUCTS_FAILED,
                payload: {
                    message: "Something went wrong!"
                }
            });
        }
    }
}

//Get product by ID
export const getProductById = (id) => {
    return async dispatch => {
        dispatch({
            type: productActionTypes.GET_PRODUCT_BY_ID_PENDING,
        });
        try {
            const res = await axios.get(`${API_BASE_URL}/products/${id}`)
            console.log("RESPONSE: ", res)
            dispatch({
                type: productActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
                payload: {
                    data: res.data
                }
            });
        } catch (error) {
            dispatch({
                type: productActionTypes.GET_PRODUCT_BY_ID_FAILED,
                payload: {
                    message: "Something went wrong!"
                }
            });
        }
    }
}
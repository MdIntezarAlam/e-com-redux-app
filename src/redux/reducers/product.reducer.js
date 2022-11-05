import { productActionTypes, responseStatuses } from "../../utils/constants"

const initialState = {
    isLoading: false,
    status: "",
    message: null,
    products: [
        // {
        //     id: 1,
        //     title: "Clouths",
        //     prince: 1234,
        //     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inch) ",
        //     category: "men's clothing",
        //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        // },
        // {
        //     id: 2,
        //     title: "T-Shirts",
        //     price: 3434,
        //     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inch) ",
        //     category: "men's clothing",
        //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        // },
    ],
    selectedProduct: null
}

const productReducer = (state = initialState, action) => {
    // console.log("==> action in product reducer: ", action)
    switch (action.type) {
        //get All Product without Id
        case productActionTypes.GET_ALL_PRODUCTS_PENDING:
            state = { ...state, isLoading: true, status: responseStatuses.info, message: "Please wait, products are fetching..." }
            return state;
        case productActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            state = { ...state, isLoading: false, status: responseStatuses.success, message: "Products fetched!", products: action.payload.data || [] }
            return state;
        case productActionTypes.GET_ALL_PRODUCTS_FAILED:
            state = { ...state, isLoading: false, status: responseStatuses.error, message: action.payload.message, products: [] }
            return state;

        //get Product By Id Products
        case productActionTypes.GET_PRODUCT_BY_ID_PENDING:
            state = { ...state, isLoading: true, status: responseStatuses.info, message: "Please wait while we are fetching product details..." }
            return state;
        case productActionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            state = { ...state, isLoading: false, status: responseStatuses.success, message: "Product details fetched!", selectedProduct: action.payload.data }
            return state;
        case productActionTypes.GET_PRODUCT_BY_ID_FAILED:
            state = { ...state, isLoading: false, status: responseStatuses.error, message: action.payload.message, selectedProduct: null }
            return state;
        default: return state
    }
}

export { productReducer }
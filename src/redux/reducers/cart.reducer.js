import { productActionTypes, responseStatuses } from "../../utils/constants";


const initialState = {
    isLoading: false,
    status: "",
    message: null,
    products: [
        {
            id: 1,
            title: "Clouths",
            prince: 1234,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inch) ",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        },
        {
            id: 2,
            title: "T-Shirts",
            price: 3434,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inch) ",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        },
    ],
    selectedProduct: null
}

//////=>>>>>>>CART REDUCER>>>>>>>>>>>>>>>///
const cartReducer = (state = initialState, action) => {
    console.log("==> action in cart reducer: ", action)
    switch (action.type) {
        //add product to cart
        case productActionTypes.ADD_TO_CART_PENDING:
            state = { ...state, isLoading: true, status: responseStatuses.info, message: "Please wait while we are fetching product details..." }
            return state;
        case productActionTypes.ADD_TO_CART_SUCCESS:
            state = { ...state, isLoading: false, status: responseStatuses.success, message: "Product details fetched!", selectedProduct: action.payload.data }
            return state;
        case productActionTypes.ADD_TO_CART_FAILED:
            state = { ...state, isLoading: false, status: responseStatuses.error, message: action.payload.message, selectedProduct: null }
            return state;

        //remove from cart
        case productActionTypes.REMOVE_FROM_CART_PENDING:
            state = { ...state, isLoading: true, status: responseStatuses.info, message: "Please wait while we are fetching product details..." }
            return state;
        case productActionTypes.REMOVE_FROM_CART_SUCCESS:
            state = { ...state, isLoading: false, status: responseStatuses.success, message: "Product details fetched!", selectedProduct: action.payload.data }
            return state;
        case productActionTypes.REMOVE_FROM_CART_FAILED:
            state = { ...state, isLoading: false, status: responseStatuses.error, message: action.payload.message, selectedProduct: null }
            return state;
        default:
            return state;
    }
}

export { cartReducer }
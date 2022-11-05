import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from "../reducers/root.reducer";
import thunk from "redux-thunk"

// const enableReduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, applyMiddleware(thunk),)

export default store
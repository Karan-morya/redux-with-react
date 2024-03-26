import { createStore, combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import productReducer from "./reducers/productReducer"


const reducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
})


export const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__())





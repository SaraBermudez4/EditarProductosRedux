import { createStore, combineReducers } from "redux";
import { productosReducer } from "../reducers/productosReducer";

const reducers = combineReducers({
    productosPrincipal: productosReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
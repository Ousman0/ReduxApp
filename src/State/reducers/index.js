import isCartOpenReducer from './isCartOpen'
import productsReducer from './products'
import cartReducer from './cart'
import { combineReducers } from 'redux'
import loadingStatesReducer from './loadingStates';


const rootReducer=combineReducers({
    isCartOpen:isCartOpenReducer,
    products:productsReducer,
    cart:cartReducer,
    loadingState:loadingStatesReducer
});


export default rootReducer;
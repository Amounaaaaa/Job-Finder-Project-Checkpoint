import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import {categorieReducer} from "./categorieReducer";

export default combineReducers({auth: authReducer,catR:categorieReducer})

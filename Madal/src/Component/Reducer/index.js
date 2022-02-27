import studentReducer from "./student";
import {combineReducers} from 'redux';
import kindRoomReducer from "./KindRoom";
import sigupReducer from "./Sigup";
const AllReducer=combineReducers({
    studentReducer,sigupReducer,kindRoomReducer
})
export default AllReducer;
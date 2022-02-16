import { combineReducers } from "redux";
import postSliceReducer from "./posts/reducer"

const reducer = combineReducers({
  posts: postSliceReducer
});

export default reducer;
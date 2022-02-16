import { combineReducers } from "redux";
import postSliceReducer from "./posts/reducer"
import postPageSliceReducer from "./postPage/reducer"

const reducer = combineReducers({
  posts: postSliceReducer,
  post: postPageSliceReducer
});

export default reducer;
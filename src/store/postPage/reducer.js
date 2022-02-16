const initialState = {
  loading: true,
  post: null,
  comments: []
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "post/gotOnePost": {
      console.log("action", action)
      return {
        ...state,
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments
      }
    }
    default: {
      return state;
    }
  }
}
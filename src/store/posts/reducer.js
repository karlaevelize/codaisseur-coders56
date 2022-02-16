const initialState = {
  loading: true,
  posts: [],
};

export default function postSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "posts/loading": {
      return {
        ...state,
        loading: true
      }
    }
    case "posts/getAllPosts": {
      console.log("action", action)
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}
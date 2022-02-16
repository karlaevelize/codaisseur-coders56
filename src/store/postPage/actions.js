import axios from "axios"

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {

}

export function postFetched(data){
  return {
    type: "post/gotOnePost",
    payload: data
  }
}

export default function fetchPost(id) {
  return async function thunk(dispatch, getState){
    //another way of writing Promise.all
    // const getPosts = await axios.get(`${API_URL}/posts/${id}`)
    // const getComment = await axios.get(`${API_URL}/posts/${id}/comments`)
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`)
    ]);

    // console.log("posts", postResponse)
    // console.log("comments", commentsResponse)

    const post = postResponse.data
    const comments = commentsResponse.data.rows

    dispatch(postFetched({ post, comments })) //like setState, puts data in the state
  }
}
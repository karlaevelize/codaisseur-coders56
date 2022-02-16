import axios from "axios"

const API_URL = "https://codaisseur-coders-network.herokuapp.com"

export function startLoading() {
  return {
    type: "posts/loading"
  }
}

export function postsFetched(data){
  return {
    type: "posts/getAllPosts",
    payload: data
  }
}

//always two parameters: dispatch, getState
export default async function fetchPosts(dispatch, getState){
  dispatch(startLoading())
  const offset = getState().posts.posts.length
  console.log("offset", offset)
  const response = await axios.get(`${API_URL}/posts?limit=2&offset=${offset}`)
  // console.log("response", response.data.rows)

  dispatch(postsFetched(response.data.rows))

}
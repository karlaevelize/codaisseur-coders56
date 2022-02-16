import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import fetchPost from "../store/postPage/actions"
import { selectPost, selectComments } from "../store/postPage/selectors"

export default function DetailsPage(){

//Details page
//1. Register a dynamic route
//2. Link the title to the dynamic page
//3. Import useParams
//4. Console params to check if it's all good
//5. Fetch data with a thunk

  const { id } = useParams()
  console.log("params", id)

  const dispatch = useDispatch()

  const post = useSelector(selectPost)
  console.log("post component", post)
  const comments = useSelector(selectComments)
  console.log("comment component", comments)

  useEffect(() => {
    dispatch(fetchPost(id))
  }, [])

  return(
    <div>
      <h1>Details Page</h1>
      {!post 
        ? "Loading" 
        : <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>}
      <h3>Comments</h3>
      {comments.length < 1 
        ? "No comments to display" 
        : comments.map(comment => <p>{comment.text}</p>)}
    </div>
  )
}
import React, {useState, useEffect} from 'react'
import axios from "axios"
import PostPreview from "../components/PostPreview"
export default function Home() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:4000/api/posts/")
    .then(res => {
      setPosts(res.data.published_posts)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])
    return (
        <div className="App">
            <h1>Blog</h1>
            {loading && <h2>Loading...</h2>}
            {!loading && posts.map(post => <PostPreview key={post._id} post={post}/>)}
      </div>
    )
}

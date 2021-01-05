import React, {useState, useEffect} from 'react'
import axios from "axios"
import PostCard from "../components/PostCard"
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
            {loading && <h2>Loading...</h2>}
            {!loading && posts.map(post => <PostCard key={post._id} post={post}/>)}
      </div>
    )
}

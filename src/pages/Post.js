import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import AddComment from "../components/AddComment"
export default function Post() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        axios.get("http://localhost:4000/api/posts/" + params.postId)
        .then(res => {
            setPost(res.data.post)
            setComments(res.data.comments)
            setLoading(false)
        })
    }, [params.postId])
    
    return (
        <div>
            <p>{JSON.stringify(params)}</p>
            {loading && <h2>Loading....</h2>}
            {!loading && <h3>Post: {JSON.stringify(post)}</h3>}
            {!loading && comments.map((comment,i) => <h4>Comment no.  {i+1} {JSON.stringify(comment)}</h4>)}
            {!loading && <AddComment postId={params.postId}/>}
        </div>
    )
}

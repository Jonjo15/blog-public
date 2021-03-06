import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import AddComment from "../components/AddComment"
import PostCard from '../components/PostCard'
import Comment from "../components/Comment"
require("dotenv").config()
export default function Post() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
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
        <div className="post-wrapper">
            {loading && <h2>Loading....</h2>}
            {!loading && <PostCard post={post}/>}
            {!loading && !showForm && <button style={{marginBottom: 20}} onClick={() => setShowForm(true)}>Add a comment</button>}
            {!loading && comments.map((comment,i) => <Comment key={comment._id} comment={comment}/>)}
            {!loading && showForm && <AddComment setShowForm={setShowForm} postId={params.postId} setComments={setComments}/>}
        </div>
    )
}

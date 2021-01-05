import React from 'react'
import {Link} from "react-router-dom"
export default function PostCard({post}) {
    let linkString = "/posts/" + post._id
    return (
        
        <div>
            <Link to={linkString}><h2>{post.title} by {post.author.first_name} {post.author.family_name}</h2></Link>
        </div>
    )
}

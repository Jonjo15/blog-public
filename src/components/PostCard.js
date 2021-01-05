import React from 'react'
// import {Link} from "react-router-dom"
export default function PostCard({post}) {
    return (
        <div>
            <h2>{post.title} by {post.author.first_name} {post.author.family_name}</h2>
        </div>
    )
}

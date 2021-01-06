import React from 'react'
import dayjs from "dayjs"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default function PostCard({post}) {
    return (
        <div className="post-card">
            <h1>{post.title}</h1>
            <h2>{post.author.first_name} {post.author.family_name}</h2>
            <small>{dayjs(post.createdAt).format('DD/MM/YYYY')}</small>
            <p>{post.body}</p>
            <small>Email the author at {post.author.email}</small>
        </div>
    )
}

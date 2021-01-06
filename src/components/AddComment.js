import React, {useState} from 'react'

export default function AddComment({postId}) {
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const handleSubmit = e => {
        e.preventDefault("")
        setAuthor("")
        setBody("")
        console.log(postId)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="author">Name: </label>
            <input onChange={(e) => setAuthor(e.target.value)} name="author" type="text" value={author}/>
            <label for="body">Your Comment</label>
            <input onChange={(e) => setBody(e.target.value)} name="body" type="textfield" value={body}/>
            <button>Submit Comment</button>
        </form>
    )
}

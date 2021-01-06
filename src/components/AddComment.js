import React, {useState} from 'react'
import axios from "axios"
export default function AddComment({postId, setComments}) {
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const handleSubmit = e => {
        e.preventDefault("")
        
        axios.post('http://localhost:4000/api/posts/' + postId, {
            author: author,
            body: body,
          })
          .then(function (response) {
            console.log(response);
            setAuthor("")
            setBody("")
            // if(response.data.success) {
            //     setComments(currComments => currComments.push({author, body}))
            // }
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="author">Name: </label>
            <input onChange={(e) => setAuthor(e.target.value)} id="author" name="author" type="text" value={author}/>
            <label htmlFor="body">Your Comment</label>
            <input onChange={(e) => setBody(e.target.value)} id="body" name="body" type="textfield" value={body}/>
            <button>Submit Comment</button>
        </form>
    )
}

import { useState } from "react";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [buttonMsg, setButtonMsg] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        const post = {title, body, author};

        setButtonMsg(true);
       
        fetch("http://localhost:5050/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            setTimeout(() => {
                setButtonMsg(false)
            }, 700)
        })
    }

    return ( 
        <form className="newpost" onSubmit={handleSubmit}>
            <h2>Create New Post📰</h2>
            <div className="title">
                <label>Title</label>
                <input
                 type="text"
                 placeholder="Post title..."
                 required
                 value = {title}
                 onChange={e => setTitle(e.target.value)} 
                 />
            </div>

            <div className="author">
                <label>Author</label>
                <input 
                 type="text"
                 required
                 value = {author}
                 onChange={e => setAuthor(e.target.value)} 
                 />
            </div>

            <div className="details">
                <label>Post Details</label>
                <textarea
                 style={{resize: "none"}} 
                 placeholder="Input Your Post Details..."
                 required
                 value = {body}
                 onChange={e => setBody(e.target.value)} 
                 ></textarea>
            </div>

            { !buttonMsg && <button>Create Post</button> }
            { buttonMsg && <button>Creating Post⏳...</button> }
        </form>
     );
}
 
export default NewPost;



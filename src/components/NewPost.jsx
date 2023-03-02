import { useState } from "react";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const post = {title, body, author};
        console.log(post);
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

            <button>Create Post</button>
        </form>
     );
}
 
export default NewPost;
import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [buttonMsg, setButtonMsg] = useState(false);
    // Storing returned object to "routeHistory"
    const routeHistory = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        const post = {title, body, author};

        //Display "Creating Post⏳..." msg before fetch operation is ran"
        setButtonMsg(true);
       
        //Creating post by sending "POST" request to server
        fetch("http://localhost:5050/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            setTimeout(() => {
                // Removing button Msg once post is created
                setButtonMsg(false)
            }, 700)
        })

        // Routing back to the home page once post is created
        routeHistory.push("/");
    }

    return ( 
        <form className="flex flex-col items-center justify-center gap-2 h-screen" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold">Create New Post</h2>
            <div className="flex flex-col w-1/2">
                <label className="text-lg font-bold">Title</label>
                <input
                 type="text"
                 placeholder="Post title..."
                 required
                 value = {title}
                 onChange={e => setTitle(e.target.value)} 
                 className="p-2 rounded-sm outline-none border-solid border border-slate-600"
                 />
            </div>

            <div className="flex flex-col w-1/2">
                <label className="text-lg font-bold">Author</label>
                <input 
                 type="text"
                 placeholder="Writer's name..."
                 required
                 value = {author}
                 onChange={e => setAuthor(e.target.value)} 
                 className="p-2 rounded-sm outline-none border-solid border border-slate-600"
                 />
            </div>

            <div className="flex flex-col w-1/2">
                <label className="text-lg font-bold">Post Details</label>
                <textarea
                 style={{resize: "none"}} 
                 placeholder="Input Your Post Details..."
                 required
                 value = {body}
                 onChange={e => setBody(e.target.value)} 
                 className="h-40 p-2 rounded-sm outline-none border-solid border border-slate-600"
                 ></textarea>
            </div>

            {/* Displaying "Create Post" when "buttonMsg returns false and vice-versa" */}
            { !buttonMsg && <button className="w-1/2 mt-4 p-2 bg-blue-700 text-white rounded-md hover:brightness-125">Create Post</button> }
            { buttonMsg && <button>Creating Post⏳...</button> }
        </form>
     );
}
 
export default NewPost;

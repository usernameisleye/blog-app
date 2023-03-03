import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
    // Returning "id" value from "Route" path using "useParams" value
    const { id } = useParams();
    const routeHistory = useHistory();
    const {data: post, hasError, isLoading} = useFetch(`http://localhost:5050/posts/${id}`);

    // Making DELETE request to server, to delete post with specific "id"
    function deletePost(id){
        fetch(`http://localhost:5050/posts/${id}`, {
            method: "DELETE",
        }).then(() => {
            window.location = "/";
            // OR
            // routeHistory.push("/")
        })
    }

    return ( 
        <div className="post-info">
            { isLoading && <div>Loading, Please wait⏳...</div> }
            { hasError && <div>{hasError}</div> } 
            { post && (
                <article className="flex flex-col items-start gap-6 h-screen p-10">
                    <div className="head">
                        <h2 className="font-extrabold text-3xl">{ post.title }</h2>
                        <p className="text-sm my-2">Created by { post.author }</p>
                    </div>
                    
                    <div className="">
                        <p>{ post.body }</p>
                    </div>

                    <button className="bg-red-700 text-white self-center w-5/6 p-2 mt-auto rounded-md hover:brightness-125" onClick={() => deletePost(id)}>Delete Post</button>
                </article>
            ) }
        </div>
     );
}
 
export default PostDetails;
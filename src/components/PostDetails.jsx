import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
    const { id } = useParams();
    const {data: post, hasError, isLoading} = useFetch(`http://localhost:5050/posts/${id}`);

    return ( 
        <div className="post-info">
            { isLoading && <div>Loading, Please wait⏳...</div> }
            { hasError && <div>{hasError}</div> } 
            { post && (
                <section>
                    <div className="head">
                        <h2>{ post.title }</h2>
                        <p>Created by { post.author }</p>
                    </div>
                    
                    <div className="body">
                        <p>{ post.body }</p>
                    </div>
                </section>
            ) }
        </div>
     );
}
 
export default PostDetails;
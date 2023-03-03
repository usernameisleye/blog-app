import Post from "./Post";
import useFetch from "./useFetch";

const Main = () => {
    // Getting 👇 'data' and storing its name as 'posts'
    const {data: posts, hasError, isLoading} = useFetch("http://localhost:5050/posts"); 

    return ( 
        <div className="bg-gray-200 h-screen p-8">
            {/* Using conditional templating to display divs/component is useState value are true/exists */}
            { isLoading && <div>Loading, Please wait⏳...</div> }
            { hasError && <div>{hasError}</div> } 
            { posts && <Post posts={posts} /> }
        </div>
    );
}
 
export default Main;
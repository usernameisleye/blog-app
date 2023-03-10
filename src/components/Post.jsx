import { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ posts }) => {
    const [allPosts, setAllPosts] = useState(posts)
    const searchInput = document.querySelector(".input");

    // Filtering through "allPosts" to return those with titles similar to input value
    searchInput.addEventListener("input", () => {
        let filterAll = allPosts.filter(post => {
            if(post.title.toLowerCase().includes(searchInput.value.toLowerCase())){
                return post;
            }
        })
        setAllPosts(filterAll);
    })

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {allPosts.map((post) => (
                <Link to={`/posts/${ post.id }`} key={post.id}>
                    <div className="bg-white h-44 rounded-md" key={ post.id }>
                            <div className={`bg-slate-500 w-full h-2 rounded-tl-md rounded-tr-md`}></div>
                        <div className="p-3">
                            <h2 className="font-bold text-xl">{ post.title }</h2>
                            <p className="text-sm opacity-70">Created by { post.author }</p>

                        </div>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default Post;
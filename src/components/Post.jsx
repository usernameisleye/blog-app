import { Link } from 'react-router-dom'

const Post = ({ posts }) => {
    // let posts = props.posts;
    return ( 
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
                    <div className="bg-white h-44 p-3 rounded-md" key={ post.id }>
                    <Link to={`/posts/${ post.id }`}>
                        <h2 className="font-bold text-xl">{ post.title }</h2>
                        <p className="text-sm opacity-70">Created by { post.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Post;
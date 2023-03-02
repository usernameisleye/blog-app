import { Link } from 'react-router-dom'

const Post = ({ posts }) => {
    // let posts = props.posts;
    return ( 
        <div className="posts">
            {posts.map((post) => (
                <div className="post" key={ post.id }>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{ post.title }</h2>
                        <p>Created by { post.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Post;
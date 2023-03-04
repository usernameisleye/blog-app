import { Link } from 'react-router-dom';

const Post = ({ posts }) => {
    // let bgArray = ["orange", "red", "blue", "slate", "black", "yellow", "emerald", "teal", "cyan", "sky", "violet", "pink", "rose", "purple"];

    // let bgColor = `bg-${bgArray[generateBg()]}-500`;

    // function generateBg(){
    //     return Math.floor(Math.random() * bgArray.length)
    // }

    return (
        <div className="grid grid-cols-auto-fit gap-4">
            {posts.map((post) => (
                <Link to={`/posts/${ post.id }`} key={post.id}>
                    <div className="bg-white h-44 rounded-md" key={ post.id }>
                        <div className="bg-slate-500 w-full h-2 rounded-tl-md rounded-tr-md"></div>
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
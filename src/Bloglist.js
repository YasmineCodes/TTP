// import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <a> 
                        <h2>{blog.title}</h2>
                        <p>{ blog.body}</p>
                    </a>
                </div>
            ))}
        </div>   
     );
}
 
export default BlogList;
import { useParams, useHistory } from "react-router"; 
import { useEffect, useState } from "react";

const Blogdetails = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null)
    const [author, setAuthor] = useState("")
    const [loading, setLoading] = useState(true);
    
    async function getBlogById () { 
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); 
        const blogData =  await response.json();    
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${blogData.userId}`); 
        const authorData = await response2.json(); 
        setBlog(blogData); 
        setAuthor(authorData); 
        setLoading(false); 

    }

    useEffect(() =>getBlogById(), [])


    return (  
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {author.username}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default Blogdetails;
import { useEffect, useState } from "react";
import BlogList from "./Bloglist";

    
const Home = () => {
   
    const [blogs, setBlogs] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const getBlogs = () => { 
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (response.ok) {
                    return response.json(); 
            }
            })
            .then(data => {
                setLoading(false); 
                setBlogs(data); 
            })
    }
    //comment out 
    console.log("at home")
    getBlogs(); 
    return (
        <div className="home">
            {loading && <div>Loading blogs...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;
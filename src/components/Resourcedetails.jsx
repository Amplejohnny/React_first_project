import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";

const ResourceDetails = () => {
    const { id } = useParams();
    const { resourceList:blog, isLoading, error } = useFetch('http://localhost:8080/resourceList/' + id);
    const navigate = useNavigate();
    const handledelete = () => {
        fetch('http://localhost:8080/resourceList/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted')
            navigate('/')
        })
    }
    return ( 
        <div >
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className="d-flex items-center justify-between flex-direction-column justify-text-center">
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button className='m-top' onClick={handledelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ResourceDetails;
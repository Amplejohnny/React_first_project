import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {title, body, author}
    fetch('http://localhost:8080/resourceList', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      navigate('/')
    })
  }

    return (
        <div >
            <form className="d-flex items-center justify-between flex-direction-column" onSubmit={handleSubmit}>
            <label> Blog title: </label>
            <input type="text" required 
            onChange={(e) => setTitle(e.target.value)}
            />
            <label> Blog body: </label>
            <textarea 
            required 
            onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <label> Blog author: </label>
            {/* <select
            onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Aderemi">Aderemi</option>
                <option value="Opeyemi">Opeyemi</option>
                <option value="John">John</option>
            </select> */}
            <input type="text" required
            onChange={(e) => setAuthor(e.target.value)}
            />
            <button className="m-top"> Add blog </button>
            </form>
        </div>
    );
}
 
export default Create;
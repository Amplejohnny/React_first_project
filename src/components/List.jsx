import { Link } from "react-router-dom";

const List = ({list: resourceList}) => (
  <ul className="outline-none div-body">
  {resourceList.map(blog => 
    <Item key={blog.id} blog={blog} />
  )}
  </ul>
);

const Item = ({blog}) => (
  <div className="d-flex items-center text-center w-100 flex-direction-column ">
    <Link to={`/blogs/${blog.id}`} className="text-decoration-none">
    <h3>{blog.title}</h3>
    <p>{blog.author}</p>
    </Link>
  </div>
)

export default List
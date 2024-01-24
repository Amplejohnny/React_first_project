import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <>
    <div className="w-100 m-top d-flex items-center justify-between">
      <div className="w-75 text-center">
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <div className='create_style '>
          <Link to="/create" className='text-decoration-none'>
          <button>Create</button>
          </Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default Search
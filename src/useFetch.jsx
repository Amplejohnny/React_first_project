import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [resourceList, setResourceList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const abortConst = new AbortController();
        fetch(url, { signal:abortConst.signal}) //http://localhost:8080/resourceList
        .then(res => {
          if(!res.ok) 
            throw Error('Could not fetch the data for that resource')
          return res.json()
        })
        .then(data => {
          setResourceList(data)
          setIsLoading(false)
          setError(null)
        })
        .catch(err => {
          if(err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
          setIsLoading(false)
          setError(err.message)
          }
        })
        return () => abortConst.abort();
      }, [url]
    );


    const handleDelete = (id) => {
        const newLists = resourceList.filter(blog => blog.id !== id);
        setResourceList(newLists);
      };

    return { resourceList, isLoading, error, handleDelete } 

}


export default useFetch
import List from './components/List'
import useFetch from './useFetch'
const MainList = () => {
  const { resourceList, isLoading, error, handleDelete} = useFetch('http://localhost:8080/resourceList');
  return (
    <>
    <div className="style_list">
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
    {resourceList && <List list={resourceList} handleDelete={handleDelete} />}
    </div>
    </>
  );
}
 
export default MainList;
// Desc: This is the main component for the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/search'
import Create from './components/Create';
import MainList from './MainList';
import ResourceDetails from './components/Resourcedetails';
import NotFound from './components/NotFound';


const App = () => {
    
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<><Search /><MainList /></>} />
        <Route path='/create' element={<Create />} />
        <Route path="/blogs/:id" element={<ResourceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    )
}

export default App
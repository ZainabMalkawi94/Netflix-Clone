import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FavList from './components/FavList';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
    </>
  );
}
export default App;
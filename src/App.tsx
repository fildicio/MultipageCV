import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cv from './components/pages/Cv'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Cv' element ={<Cv />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



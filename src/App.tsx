import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Cv from './components/pages/Cv'
import { Contact } from './components/pages/Contact';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Cv' element ={<Cv />} />
          <Route path='/Contact' element ={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatFlowersPage from './CatFlowersPage';
import ValentinePage from './ValentinePage';
import LetterPage from './LetterPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatFlowersPage />} />
        <Route path="/valentine" element={<ValentinePage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

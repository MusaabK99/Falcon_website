import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EsportsHub from './pages/EsportsHub';
import CreatorHub from './pages/CreatorHub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/esports" element={<EsportsHub />} />
        <Route path="/creators" element={<CreatorHub />} />
      </Routes>
    </Router>
  );
}

export default App;
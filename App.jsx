import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';  // Remove .jsx extension
import ReviewList from './components/ReviewList';     // Remove .jsx extension

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/feedback">Give Feedback</Link>
          <Link to="/reviews">View Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
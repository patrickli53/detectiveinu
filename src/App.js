import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;

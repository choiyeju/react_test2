import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './containers/Main';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
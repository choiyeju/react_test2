import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //HashRouter
import Main from './pages/Main';
import LifeCycle from './pages/LifeCycle';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main/>} />
        <Route path="/lifecycle" element={<LifeCycle/>} />
      </Routes>
    </Router>
  );
}

export default App;
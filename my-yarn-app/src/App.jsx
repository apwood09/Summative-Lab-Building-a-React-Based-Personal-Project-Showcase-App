import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { YarnProvider } from './context/YarnContext';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { InventoryPage } from './pages/InventoryPage';
import { AddYarnPage } from './pages/AddYarnPage';
import './App.css';

function App() {
  return (
    <YarnProvider>
      <Router>
        <div className="App">
          <Navbar /> 
          <main className="App-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/add" element={<AddYarnPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </YarnProvider>
  );
}

export default App;

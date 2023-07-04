import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PlanetsPage from './Pages/PlanetsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PlanetsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

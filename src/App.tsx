import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Planets from './pages/planets';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

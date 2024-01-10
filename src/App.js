import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import RegistrationPage from './components/Regscreen';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<RegistrationPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

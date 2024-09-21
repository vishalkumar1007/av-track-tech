import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component list 

import Home from './Page/Home/Home';
import Dashboard from './Page/Dashboard/Dashboard';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import About from './Page/About/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Dashboard />} />
        <Route path='/dashboard' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

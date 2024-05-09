import './App.css';

import { Route, Routes } from 'react-router-dom';

import Customers from './pages/Customers/Customers';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Suppliers from './pages/Suppliers/Suppliers';
import Sidebar from './utilities/commonComponents/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </div>
  );
}

export default App;

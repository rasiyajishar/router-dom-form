
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Login from './Components/Login';

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

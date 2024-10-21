import Signup from './components/loginSingnup/Signup';
import Login from './components/loginSingnup/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route, Navigate} from 'react-router-dom';

function App() {

  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

      </Routes>
    
    </div>
  );
}

export default App;


import './App.css';
import Blog from './pages/Blog.jsx';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.jsx';

function App() {

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/signin' />
  }

  return (
    <BrowserRouter>

      <nav>
        <ul className='flex gap-3'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/signin">Signin</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>

        </ul>
      </nav>

      <Routes>

        <Route element={<Blog />} path='/' />
        <Route element={<SignIn />} path='/signin' />
        <Route element={<RequireAuth><Dashboard /></RequireAuth>} path='/dashboard' />


      </Routes>


    </BrowserRouter>
  );
}

export default App;

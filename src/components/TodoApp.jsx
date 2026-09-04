import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Login from '../routes/Login';
import Profile from '../routes/Profile';

import NotMatch from '../routes/NotMatch';
import Layout from './Layout';
import SinglePage from '../routes/SinglePage';
import ProtectedRoute from './ProtectedRoute';
const TodoApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
        </Route><Route path="login" element={<Login />} />
        
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>}
            />  
                
          
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
};
export default TodoApp;
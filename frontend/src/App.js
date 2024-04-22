
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signin from "./componets/Signin";
import Profile from "./componets/Profile";
import AdminHome from './componets/AdminHome';
import DashBoard from './componets/DashBoard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/adminhome' element={<AdminHome/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/alluser' element={<AdminHome/>} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




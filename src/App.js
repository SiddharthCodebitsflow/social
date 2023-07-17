import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddFriend from './components/AddFriend';
import Auth from './components/Auth';
import Auth1 from './components/Auth1';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import image1 from './image/1.jpg';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<><Auth /> <NavBar /> <Profile profileImage={image1} /> </>} >
            <Route path="/user" element={<Home />} />
            <Route path="/user/add-friend" element={<AddFriend />} />
          </Route>
          <Route path='/' element={<Auth1 />}>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>

  );
}
export default App;

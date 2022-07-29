import './App.css';
// import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Profile from './components/Profile/Profile';
import Settings from './components/settings/Settings';
import SingUp from './components/sign-up/SingUp';
import CreatAcoount from './components/Create-account/CreatAcoount';
import Documents from './components/Documents.js/Documents';

import Navbar from './components/header/Navbar';
import Doctor from './components/doctors/Doctor';
import SignOut from './components/Sign-out/SignOut';
import Scearch from './components/DoctorHelper/Scearch';
import HomeLog from './components/logout home/HomeLog';
import { ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toastify/dist/components';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />

    <Routes>
    <Route path="/" element={< HomeLog/>}/>
      <Route path="/home" element={<Documents />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path='/singUp' element={<SingUp/>}/>
        <Route path='/creataccount' element={<CreatAcoount/>}/>
        <Route path='/documnets' element={<Scearch/>}/>
        <Route path='/edits' element={<Doctor/>}/>
        <Route path='/signOut' element={<SignOut/>}/>

     
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

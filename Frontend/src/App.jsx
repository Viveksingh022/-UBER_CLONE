import { Route, Routes } from 'react-router-dom'
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import DriverLogin from "./pages/driverLogin";
import DriverSignup from "./pages/driverSignup";
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';



const App = () => {

const user = useContext(UserContext);

console.log(user);

  return (
    <div>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<UserLogin />} />
  <Route path="/signup" element={<UserSignup />} />
  <Route path="/driver-login" element={<DriverLogin />} />
  <Route path="/driver-signup" element={<DriverSignup />} />

</Routes>

    </div>
  );

}

export default App;
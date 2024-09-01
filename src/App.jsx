import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Profile from './components/Profile/Profile.jsx'
import Sales from './components/Sales/Sales.jsx'
import Purchase from './components/Purchase/Purchase.jsx'
import Storage from './components/Storage/Storage.jsx'
import Settings from './components/Settings/Settings.jsx'
import Password from './components/Password/Profile.jsx'
import Email from './components/Email/Profile.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />} />
<Route path="/Dashboard" element={<Dashboard />} />
<Route path="/Profile/Email" element={<Email />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/Profile/Password" element={<Password />} />
<Route path="/Purchase" element={<Purchase />} />
<Route path="/Sales" element={<Sales />} />
<Route path="/Settings" element={<Settings />} />
<Route path="/Storage" element={<Storage />} />
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

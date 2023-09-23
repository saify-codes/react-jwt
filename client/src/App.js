import { Routes, Route } from "react-router-dom";
import ProtedctedRoute from "./auth/ProtectedRoute";
import Home from "./components/home";
import Login from './pages/login'
function App() {
  return <>
    <Routes>
      <Route path="/" element={<ProtedctedRoute><Home/></ProtedctedRoute>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </>
}

export default App;

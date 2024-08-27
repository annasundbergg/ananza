import ProtectedRoute from "./components/ProtectedRoute";
import LoginScreen from "./pages/LoginScreen";
import DashBoard from "./pages/test/DashBoardScreen";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen></LoginScreen>}></Route>

      {/* <Route path="/test" element={<DashBoard></DashBoard>}></Route> */}
      <Route
        path="/test"
        element={<ProtectedRoute element={<DashBoard />} />}
      />
    </Routes>
  );
}

export default App;

import "./App.css";
import { LogIn, Dashboard } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import HomeHeader from "./components/Home/HomeHeader";
import DemoHeader from "./components/Demo/DemoHeader";
import { Blog } from "./Context/Context";

function App() {
  const { currentUser } = Blog();
  return (
    <>
      {currentUser ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/demo" element={<Demo />} />}
        <Route
          path="*"
          element={<Navigate to={!currentUser ? "/demo" : "/"} />}
        />
      </Routes>
    </>
  );
}

export default App;

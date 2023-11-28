import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import HomeHeader from "./components/Home/Header/HomeHeader";
import DemoHeader from "./components/Demo/DemoHeader";
import { Blog } from "./Context/Context";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Home/Profile/Profile";
import Write from "./components/Home/Write/Write";
import SinglePost from "./components/Common/Posts/SinglePost";
import EditPost from "./components/Common/Posts/EditPost";

function App() {
  const { currentUser } = Blog();
  return (
    <>
      {currentUser ? <HomeHeader /> : <DemoHeader />}
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/demo" element={<Demo />} />}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
        <Route
          path="*"
          element={<Navigate to={!currentUser ? "/demo" : "/"} />}
        />
      </Routes>
    </>
  );
}

export default App;

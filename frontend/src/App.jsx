import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import User from "./User";
import Serve from "./Serve";
import Qrimg from "./Qrimg";
import Qrnew from "./Qrnew";
import Hospscan from "./Hospscan";
import Umains from "./Umains";
import MainScreen from "./MainScreen";
import Healthdetails from "./Healthdetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hospitalview from "./Hospitalview";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useNavigation,
//   BrowserRouter,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainScreen />,
//   },
//   {
//     path: "/user/login",
//     element: <Login />,
//   },
//   {
//     path: "/user/register",
//     element: <Register />,
//   },
//   {
//     path: "/uauth/main",
//     element: <Umains />,
//   },
// ]);

function App() {
  // const navigate = useNavigation();
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/user/login" element={<MainScreen />} />
        </Routes>
      </BrowserRouter> */}
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uscr" element={<Umains />} />
        <Route path="/qr" element={<Hospscan />} />
        <Route path="/umain" element={<Umains />} />
        <Route path="/myqr" element={<Qrnew />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/hdet" element={<Healthdetails />} />
      </Routes>
      {/* <Hospitalview /> */}
    </div>
  );
}

export default App;

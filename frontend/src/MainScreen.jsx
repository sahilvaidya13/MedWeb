import React from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Hospscan from "./Hospscan";
import Umains from "./Umains";
import Qrnew from "./Qrnew";
import Register from "./Register";
import Healthdetails from "./Healthdetails";
const MainScreen = () => {
  //   const history = useHistory();
  //   const handleButtonClick = () => {
  //     history.push("./User");
  //   };
  // const router = createBrowserRouter;
  // const navigate = useNavigation();
  // const navigatetoLogin = () => {
  //   navigate("/user/login");
  // };
  // const navigatetoRegi = () => {
  //   navigate("/user/login");
  // };
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/login");
  };
  const checkouttohosp = () => {
    navigate("/qr");
  };
  return (
    <div>
      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-rose-100 flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
                <svg
                  className="absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              MedWeb
              <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <button
                  onClick={checkout}
                  className="peer h-10 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                >
                  Login as User
                </button>

                <button
                  onClick={checkouttohosp}
                  className="peer h-10 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                >
                  Login as Hospital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

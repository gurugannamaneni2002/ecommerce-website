import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "./logo.png"
import { useSelector } from 'react-redux';
const App = () => {
  const cartitems = useSelector((state) => state.cartitems.value);
  return (
    <div className=" w-screen">
      <div className=" mx-auto py-2" style={{ backgroundColor: "rgb(15, 23, 42)" }}>
        <div className="mx-auto w-5/6  max-w-[1080px]  Header text-white flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" className="w-[250px] h-[60px]" />
          </div>
          <div className="flex items-center gap-5">
  <div className="hover:text-green-400 transition-colors">
    <NavLink to="/">Home</NavLink>
  </div>
  <div className="hover:text-green-400 transition-colors relative">
    <NavLink to="/cart">
      {cartitems.length === 0 ? null : (
        <div className="absolute bg-green-600 text-xs z-10 w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full text-white">
          {cartitems.length}
        </div>
      )}
      <FaCartShopping className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200" />
    </NavLink>
  </div>
</div>

        </div>
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

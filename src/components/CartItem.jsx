import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/Slices/cartSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = (item) => {
  const dispatch = useDispatch();
  const handleRemovefromCart=()=>{
    dispatch(removeFromCart({ id: item.id }));
    toast.error('Item removed from cart!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   
      });
  };
  return(
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
      <div className="w-[30%]">
        <img src={item.image} className="object-cover "></img>
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
        <div className="text-xl text-slate-700 font-semibold">{item.title}</div>
        <div className="text-base text-slate-700 font-medium">{item.description.substring(0, 130)}{"..."}</div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-green-600">{"$"}{item.price}</p>
          <button className=" bg-red-200 group hover:bg-red-400 transition-transform
           duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={handleRemovefromCart}><MdDelete /></button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default CartItem;

import { useSelector, useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/Slices/cartSlice';
import { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Product = (data) => {
  const cartitems = useSelector((state) => state.cartitems.value);
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({ id: data.id }));
    setaddedcart(true);
    toast.success('Item added to cart!', {
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

  const handleRemovefromCart=()=>{
    dispatch(removeFromCart({ id: data.id }));
    setaddedcart(false);
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
  
  const [addedtocart,setaddedcart]=useState(false);

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between 
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <div className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{data.title}</div>
      <div className=" w-40 text-gray-400 font-normal text-[10px] text-left">{data.description.substring(0, 50)}</div>
      <div className="h-[180px]"><img className="h-full w-full object-contain" src={data.image} alt={data.title} /></div>
      <div className="flex items-center justify-between w-full mt-5">
        <div className="text-green-600 font-semibold">{`$${data.price}`}</div>
        {
          (addedtocart)?
          <button className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
            text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase
             tracking-wide" onClick={handleRemovefromCart}>Remove item</button>
          
          :<button className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
            text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase
             tracking-wide" onClick={handleAddToCart}>Add to cart</button>

          
        }
        
        
      </div>
    </div>
  );
};

export default Product;

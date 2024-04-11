import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from "../components/CartItem";
import { useState, useEffect } from 'react';

const Cart = () => {
  const cartitems = useSelector((state) => state.cartitems.value);
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartitems.length; i++) {
      total += cartitems[i].price;
    }
    total = total.toFixed(2);
    setTotalAmount(total);
  }, [cartitems]);

  console.log(cartitems);
  console.log(cartitems.length);
  
  if (cartitems.length === 0) {
    return (
      <div className='min-h-[80vh] flex flex-col items-center justify-center'>
        <div className='text-gray-700 font-semibold text-xl mb-2'>Your cart is empty!</div>
        <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition
         duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700
          p-3 px-10 tracking-wider'><NavLink to="/">Shop Now</NavLink></button>
      </div>
    );
  } else {
    return (
      <div className=' min-w-full min-h-screen'>
        <div className='max-w-[1200px]  mx-auto flex flex-col md:flex-row justify-center'>
        <div className='w-[100%] md:w-[60%] flex flex-col p-2 py-10'>
          {cartitems.map((item) => (
            <CartItem key={item.id} {...item} />
            
          ))}
        </div>
        <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>
          <div className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>
          <div className='flex flex-col gap-5 '>
            <p className='font-semibold text-xl text-green-800 '>YOUR CART</p>
            <p className='font-semibold text-5xl text-green-700  -mt-5'> SUMMARY</p>
            <p className='text-gray-700 font-semibold text-xl'>Total Items:<span className='text-green-700'>
             {cartitems.length}</span></p>
            
          </div>
          <div>
            <p className='text-xl font-bold'>Total Amount :<span className='text-green-800'>{totalAmount}</span> </p>
            <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition
             duration-300 ease-linear mt-5 
            border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>Checkout Now</button>
          </div>
          
          </div>
        </div>
        </div>
      </div>
    );
  }
};

export default Cart;

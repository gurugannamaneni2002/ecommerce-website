import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/Store";
import { Provider } from 'react-redux';
import {ToastContainer} from "react-toastify"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </Provider>
  </BrowserRouter>
);

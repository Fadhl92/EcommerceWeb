import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
 
  import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Success from "./pages/Success";
import { useSelector } from "react-redux";
const App = () => {
   
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/products" element={<ProductList />}> </Route>
      <Route  path="/products/:category" element={<ProductList />}></Route>
      <Route  path="/product/:id" element={<Product />}> </Route>
      <Route  path="/products" element={<Product />}> </Route>
      <Route  path="/cart" element={<Cart />}> </Route>
      <Route path="/success" element={<Success/>}> </Route>
    
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}> </Route>
        
       
  
 
   
    </Routes>
     </BrowserRouter>


  );
};



export default App;
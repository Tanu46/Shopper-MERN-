
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar-1/Navbar";
import LogininSignup from "./Pages/LogininSignup";

import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import Men_banner from "./Components/Assets/banner_mens.png";
import Women_banner from "./Components/Assets/banner_women.png";
import Kid_banner from "./Components/Assets/banner_kids.png";
import Footer from "./Components/Footer-8/footer";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
       
        <Route
          path="/men"
          element={<ShopCategory banner={Men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={Women_banner} category="women" />}
        />
        
        <Route
          path="/kids"
          element={<ShopCategory banner={Kid_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogininSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

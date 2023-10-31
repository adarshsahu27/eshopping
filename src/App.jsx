import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { WishListProvider } from "./context/wish.context";
import WishList from "./components/WishList/WishList";
import { CartProvider } from "./context/cart.context";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <CartProvider>
        <WishListProvider>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Routes>
            <Route path="wishList" element={<WishList />} />
          </Routes>
        </WishListProvider>
      </CartProvider>
    </div>
  );
}

export default App;

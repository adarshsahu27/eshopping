import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { WishListProvider } from "./context/wish.context";
import WishList from "./components/WishList/WishList";

function App() {
  return (
    <div>
      <WishListProvider>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Routes>
          <Route path="wishList" element={<WishList />} />
        </Routes>
      </WishListProvider>
    </div>
  );
}

export default App;

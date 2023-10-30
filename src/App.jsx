import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

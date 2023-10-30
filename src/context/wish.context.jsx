import { createContext, useEffect, useState } from "react";

const WishListContext = createContext();
export const WishListProvider = (props) => {
  const { children } = props;

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishListData"));
    if (storedWishList) {
      setWishList(storedWishList);
    }
  }, []);

  function addToWishList(product) {
    setWishList((prevWishList) => {
      const temp = [...prevWishList];
      temp.push(product);
      localStorage.setItem("wishListData", JSON.stringify(temp));
      return temp;
    });
  }

  function removeFromWishList(productId) {
    setWishList((prevWishList) => {
      const updatedWishList = prevWishList.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("wishListData", JSON.stringify(updatedWishList));
      return updatedWishList;
    });
  }

  return (
    <WishListContext.Provider
      value={{ addToWishList, removeFromWishList, wishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
export default WishListContext;

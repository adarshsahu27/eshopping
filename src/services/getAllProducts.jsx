import axiosInstance from "../utils/axios";

const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("products");
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
  } catch (error) {
    return Promise.resolve({
      isSuccess: true,
      data: error,
    });
  }
};

export default getAllProducts;

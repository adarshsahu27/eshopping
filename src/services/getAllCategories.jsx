import axiosInstance from "../utils/axios";

const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get("products/categories");
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

export default getAllCategories;

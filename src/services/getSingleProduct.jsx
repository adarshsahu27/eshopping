import axiosInstance from "../utils/axios";

const getSingleProduct = async (params) => {
  try {
    const response = await axiosInstance.get(`products/${params}`);
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

export default getSingleProduct;

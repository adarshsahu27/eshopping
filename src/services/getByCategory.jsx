import axiosInstance from "../utils/axios";

const getByCategory = async (params) => {
  try {
    const response = await axiosInstance.get(`products/category/${params}`);
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

export default getByCategory;

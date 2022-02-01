import { api } from "../../../services/api";

export async function getProducts() {
  try {
    const { data: productInfo } = await api.get(`/products`);
    return productInfo;
  } catch (e) {
    console.log(e);
  }
}
export async function getProductInfo({ id }) {
  try {
    const { data: productInfo } = await api.get(`/products/${id}`);
    return productInfo;
  } catch (e) {
    console.log(e);
  }
}

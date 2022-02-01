import { getProductInfo, getProducts } from "./actions";

export async function staticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { id: `${product.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function staticProps({ params }) {
  const productInfo = await getProductInfo({ id: params.id });
  return {
    props: {
      productInfo,
    },
  };
}

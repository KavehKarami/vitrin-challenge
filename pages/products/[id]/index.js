import {
  staticPaths,
  staticProps,
} from "../../../app/logic/products/[id]/preRender";
import { ProductCard } from "../../../app/components";

export async function getStaticPaths() {
  return staticPaths();
}

export function getStaticProps({ params }) {
  return staticProps({ params });
}

function ProductDetail({ productInfo }) {
  return (
    <div className="container">{<ProductCard productInfo={productInfo} />}</div>
  );
}

export default ProductDetail;

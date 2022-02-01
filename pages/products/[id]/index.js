import Head from "next/head";
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
    <div className="container">
      <Head>
        <title>{productInfo.title}</title>
        <meta name="description" content={productInfo.description} />
      </Head>
      <ProductCard productInfo={productInfo} />
    </div>
  );
}

export default ProductDetail;

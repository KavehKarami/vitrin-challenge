import {
  CardDes,
  CardFooter,
  CardHeader,
  CardImage,
  CardControls,
} from "./components";

function ProductCard({ productInfo }) {
  return (
    <div className="card-container">
      <CardImage />

      <div className="product-details">
        <CardHeader
          title={productInfo.title}
          category={productInfo.category}
          rating={productInfo.rating}
          price={productInfo.price}
        />
        <CardDes description={productInfo.description} />
        <CardControls />
        <CardFooter />
      </div>
    </div>
  );
}

export { ProductCard };

function CardImage() {
  return (
    <div className="product-image">
      <img
        src="/images/nikeLogo.png"
        alt="logo"
        className="product-logo"
      />
      <img
        src="/images/nikeShoe.png"
        alt="nikeShoe"
        className="product-pic"
      />
      <div className="dots">
        <a href="#!" className="active">
          <i>1</i>
        </a>
        <a href="#!">
          <i>2</i>
        </a>
        <a href="#!">
          <i>3</i>
        </a>
        <a href="#!">
          <i>4</i>
        </a>
      </div>
    </div>
  );
}

export { CardImage };

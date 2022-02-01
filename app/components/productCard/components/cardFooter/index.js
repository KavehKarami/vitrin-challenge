function CardFooter() {
  return (
    <div className="footer">
      <button type="button">
        <img src="/images/cart.png" alt="" />
        <span>add to cart</span>
      </button>
      <a href="#!">
        <img src="/images/share.png" alt="" />
      </a>
    </div>
  );
}

export { CardFooter };

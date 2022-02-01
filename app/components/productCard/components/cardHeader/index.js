function CardHeader({ title, category, rating, price }) {
  return (
    <header>
      <h1 className="title">
        {title.length < 14 ? title.slice(0, 14) : title.slice(0, 11) + " ..."}
      </h1>
      <span className="colorCat">{category}</span>
      <div className="price">
        <span className="before">${price + 100}</span>
        <span className="current">${price}</span>
      </div>
      <div className="rate">
        {Array(5)
          .fill(0)
          .map((item, i) => (
            <a
              className={+i + 1 <= Math.round(+rating.rate) ? "active" : ""}
              href="#!"
              key={i}
            >
              ★
            </a>
          ))}
      </div>
    </header>
  );
}

export { CardHeader };

function CardControls() {
  return (
    <div className="controls">
      <div className="color">
        <h5>color</h5>
        <ul>
          <li>
            <a href="#!" className="colors color-bdot1 active"></a>
          </li>
          <li>
            <a href="#!" className="colors color-bdot2"></a>
          </li>
          <li>
            <a href="#!" className="colors color-bdot3"></a>
          </li>
          <li>
            <a href="#!" className="colors color-bdot4"></a>
          </li>
          <li>
            <a href="#!" className="colors color-bdot5"></a>
          </li>
        </ul>
      </div>
      <div className="size">
        <h5>size</h5>
        <a href="#!" className="option">
          (UK 8)
        </a>
      </div>
      <div className="qty">
        <h5>qty</h5>
        <a href="#!" className="option">
          (1)
        </a>
      </div>
    </div>
  );
}

export { CardControls };

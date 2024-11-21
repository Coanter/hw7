import "./index.css";

export function ProductCard(props) {
  const { image, category, title, price } = props.data;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="category">{category}</div>
      <h4>{title}</h4>
      <div className="footer">
        <div className="price">${price}</div>
        <button onClick={() => alert(`Taken ${title} to basket`)}>
          Take to basket
        </button>
      </div>
    </div>
  );
}
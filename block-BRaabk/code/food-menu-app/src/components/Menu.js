function Menu(props) {
  return (
    <>
      {props.allProducts.map((product) => (
        <article key={product.id}>
          <div>
            <img src={product.img} alt={product.title} />
          </div>
          <div className="product-box">
            <div className="product-title">
              <h4>{product.title}</h4>
              <h4>${product.price}</h4>
            </div>
            <div>
              <p>{product.desc}</p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Menu;

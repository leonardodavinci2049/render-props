import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};



export default ProductItem;

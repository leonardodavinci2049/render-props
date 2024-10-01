import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
const ProductList = ({ title, items }) => {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default ProductList;

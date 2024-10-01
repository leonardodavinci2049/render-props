import { products } from "../utils/products";
import "../index.css";
import List from "../components/List";
import { companies } from "../utils/companies";
import ProductItem from "../components/ProductItem";
import CompanyItem from "../components/CompanyItem";

import ProductList from "../components/ProductList";
import withToggles from "../utils/HOC";

const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
     <h1>Render Props Demo</h1>
{/*  
      <div className="col-2">
        <List
          title="Product List"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />

        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div> */}
      <div className="col-2">
        <ProductList title="Products HOC 1" items={products} />
        <ProductListWithToggles title="Products HOC 2" items={products} />
      </div>
    </div>
  );
}

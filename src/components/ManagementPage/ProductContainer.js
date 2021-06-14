import ProductList from './ProductList';
import './ManagementPage.css';

const ProductContainer = ({allProducts}) => {
    return (
        <div className="ProductContainer">
            <div className="ListTable">
                <p>CATEGORY</p>
                <p>PRODUCT NAME</p>
                <p>PRICE</p>
            </div>
            <ProductList allProducts={allProducts}/>
        </div>

    );
}

export default ProductContainer;

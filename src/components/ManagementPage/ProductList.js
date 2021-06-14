import { ReactComponent as Trash } from '../../assets/redtrash.svg';
import { ReactComponent as Pencil } from '../../assets/pencilicon.svg';
import { ReactComponent as Coin } from '../../assets/coin.svg';

const ProductList = ({ allProducts, deleteProductHandler }) => {
    return (

        allProducts.map((products) => {
            return (
                <div className="ProductList">
                    <img className="ProductImages" src={products.image}></img>
                    <div className="ProductDes">
                        <p className="ProductText">{products.category.name}</p>
                        <p className="ProductText">{products.name}</p>
                        <p className="ProductText"><Coin/>{products.price}</p>
                    </div>
                    <div className="IconWrap">
                        <Pencil className="pencil" />
                        <Trash className="trash" onClick={() => deleteProductHandler(products._id)}/>
                    </div>

                </div>

            );
        })

    );
}

export default ProductList;
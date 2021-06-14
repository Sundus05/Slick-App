import { ReactComponent as Close } from '../../assets/close.svg';
import Button from '../../components/Button/Button';
import './Modal.css';
import axios from 'axios';
import { useState } from 'react';



const ModalProducts = ({allProducts, setAllProducts, closeFunction}) => {

    const [product, setProduct] = useState({
        image: "",
        category: "",
        name: "",
        price: 0
    });

    const postProductHandler = (e) => {
        axios.post('https://internship-slick-api.herokuapp.com/api/products', product)
            .then(res => {
                setAllProducts([...allProducts, res.data.data]);
                console.log(res);
            });
    }


    return (

        <div className="ShowModal">
            <div className="ProductModalContent">
                <div className="ModalHead">
                    <h3> Add New Product </h3>
                    <span class="close" onClick={closeFunction}><Close /></span>
                </div>
                <div className="ModalInput">
                    <p>ENTER IMAGE URL</p>
                    <input type="text" placeholder="Write here..." value={product.image} onChange={(e) => { setProduct({ ...product, image: e.target.value })}}></input>
                    <p>SELECT CATEGORY</p>
                    <select value={product.category} onChange={(e) => { setProduct({ ...product, category: e.target.value }) }}>
                        <option value="1">Apparel</option>
                        <option value="2">Vehicles</option>
                        <option value="3">Accessories</option>
                        <option value="4">Food</option>


                    </select >
                    <p>PRODUCT NAME</p>
                    <input type="text" placeholder="Write here..."
                    onChange={(e) => { setProduct({ ...product, name: e.target.value }) }} value={product.name}></input>
                    <p>PRICE</p>
                    <input type="text" value={product.price} onChange={(e) => { setProduct({ ...product, price: e.target.value })}} placeholder="Write here..."></input>
                    <div className="ButtonContainer">
                        <Button classes="SaveButton" onClick={postProductHandler} text="Save"></Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ModalProducts;
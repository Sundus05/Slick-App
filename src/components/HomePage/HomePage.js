import './HomePage.css';
import { ReactComponent as Notifications } from '../../assets/notifications.svg';
import ProductCards from './ProductCards';
import Carousel from '../Carousel/Carousel';


function HomePage() {
    return (
        <div className="HomePage">
            <div className="Header">
                <div>
                    <h4 className="HeadText">Hey Awesome,</h4>
                    <h2 className="Head">Welcome Back...</h2>
                </div>
                <div>
                    <br></br>
                    <Notifications />
                </div>
            </div>
            <Carousel></Carousel>
            <h3>Listed Products</h3>
            <div className="CardContainer">
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
            </div>



        </div>
    );


}

export default HomePage;
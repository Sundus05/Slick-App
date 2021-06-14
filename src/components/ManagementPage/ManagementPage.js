import { Link } from 'react-router-dom';
import './ManagementPage.css';
import { ReactComponent as Notifications } from '../../assets/notifications.svg';
import Button from '../Button/Button';
import ListContainer from './ListContainer';
import ProductContainer from './ProductContainer';
import ModalBanner from '../Modal/ModalBanner';
import ModalProducts from '../Modal/ModalProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';




const ManagementPage = () => {

  const [allBanners, setAllBanners] = useState([]);
  const [allProducts, setAllProducts] = useState([]);


  useEffect(() => {
    axios.get('https://internship-slick-api.herokuapp.com/api/banners').then(({ data }) => {
      setAllBanners(data.data);
    });

  }, []);

  useEffect(() => {
    axios.get('https://internship-slick-api.herokuapp.com/api/products').then(({ data }) => {
      setAllProducts(data.data);
    });

  }, []);


  const deleteProductHandler = (id) => {
    axios.delete('https://internship-slick-api.herokuapp.com/api/products?id=' + id).then(res => {
      axios.get('https://internship-slick-api.herokuapp.com/api/products').then(({ data }) => {
        console.log(data.data)
        setAllBanners(data.data);
      })
      alert('This product was deleted!!');
    });

  }

  const deleteBannerHandler = (id) => {
    axios.delete('https://internship-slick-api.herokuapp.com/api/banners?id=' + id).then(res => {
      axios.get('https://internship-slick-api.herokuapp.com/api/banners').then(({ data }) => {
        console.log(data.data)
        setAllBanners(data.data);
      })
      alert('This banner was deleted!!');
    });

  }



  

  const [showModal, setShowModal] = useState(false);

  const changeState = () => {
    setShowModal(!showModal);
  }



  return (
    <Router>
      <Switch>
        <div className="ManagementPage">
          <div className="Header">
            <div><h3>Management</h3></div>
            <div><Notifications /></div>
          </div>
          <div className="MainContainer">
            <div className="ContainerHead">
              <div className="ManageText">
                <Link className="ManageTexts" to="/management">Manage Banners</Link>
                <Link className="ManageTexts" to="/2">Manage Products</Link>
              </div>
              <Route path="/management">
                {showModal ? <ModalBanner ModalText="Add New Banner" closeFunction={changeState} /> : null}
              </Route>
              <Route path="/2">
                {showModal ? <ModalProducts ModalText="Add New Banner" closeFunction={changeState} /> : null}
              </Route>

              <Button classes="AddButton" text=" + Add New" onClick={changeState}></Button>
            </div>

            <Route path="/management">
              <ListContainer deleteBannerHandler={deleteBannerHandler} allBanners={allBanners} />
            </Route>
            <Route path="/2">
              <ProductContainer deleteProductHandler={deleteProductHandler} allProducts={allProducts} />
            </Route>

          </div>

        </div>
      </Switch>
    </Router>

  );
}

export default ManagementPage;

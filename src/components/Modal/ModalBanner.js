import { ReactComponent as Close } from '../../assets/close.svg';
import Button from '../../components/Button/Button';
import './Modal.css';
import { useState } from 'react';
import axios from 'axios';




const ModalBanner = ({setAllBanners, allBanners, closeFunction}) => {

    const [banners, setBanners] = useState({
        link: ""

    });
    
    const postBannerHandler = (e) => {
        axios.post('https://internship-slick-api.herokuapp.com/api/banners', banners)
            .then(res => {
                setAllBanners([...allBanners, res.data.data]);
                console.log(res);
            })
    }




    const inputHandler = (e) => {
        setBanners({...banners, link: e.target.value});
        console.log(setBanners);
      };


    return (

        <div className="ShowModal">
            <div className="ModalContent">
                <div className="ModalHead">
                    <h3> Add New Banner </h3>
                    <span class="close" onClick={closeFunction}><Close/></span>
                </div>
                <div className="ModalInput">
                    <p>ENTER IMAGE URL</p>
                    <input type="text" onChange={inputHandler} value={banners.link} placeholder="Write here..."></input>
                    <div className="ButtonContainer">
                        <Button classes="SaveButton" onClick={postBannerHandler} text="Save"></Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ModalBanner;
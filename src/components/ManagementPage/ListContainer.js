import { ReactComponent as Trash } from '../../assets/redtrash.svg';
import { ReactComponent as Pencil } from '../../assets/pencilicon.svg';
import { ReactComponent as Link } from '../../assets/link.svg';
import axios from 'axios';
// import Banner2 from '../HomePage/banner2.jpg';



const ListContainer = ({allBanners, deleteBannerHandler}) => {
    
    

    return (
        
        allBanners.map((banner) => {
            return (
                <div className="ListContainer" key={banner._id}>
                    <img className="ListImages" src={banner.link}></img>
                    <div className="ListLinks"><Link className="LinkIcon" /><p className="LinkText">{banner.link}</p></div>
                    <div className="IconContainer"><Pencil className="pencil"/><Trash className="trash" onClick={() => deleteBannerHandler(banner._id)}/></div>
                </div>

            );

        })
    );
}

export default ListContainer;






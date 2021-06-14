import './SideBar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Analytics } from '../../assets/analytics.svg';
import { ReactComponent as Products } from '../../assets/products.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import SubContainer from './SubContainer';
import ListContainer from '../ManagementPage/ListContainer';


const SideBar = () => {
   const icons = [
        {
            to: '/',
            title: 'Home',
            ico: <Home/>
        },
        {
            to: '/',
            title: 'Analytics',
            ico: <Analytics/>
        },
        {
            to: '/',
            title: 'Products',
            ico: <Products/>
        },
        {
            to: '/management',
            title: 'Management',
            ico: <Settings/>
        }
    ]
    
    return (
        <div className="SideBar">
            <div>
            <div className="header"><Logo/><h2 className="Logo"> Slick</h2></div>
            {

                icons.map( (icon) => {
                    return(
                 <div className="Links">
                     {icon.ico}
                     <li className="Navlinks"><Link classname="Link" to={icon.to}>{icon.title}</Link></li>
                 </div>

                    );

                })

            }
            </div>
            <SubContainer/>
        </div>
    );
}

export default SideBar;

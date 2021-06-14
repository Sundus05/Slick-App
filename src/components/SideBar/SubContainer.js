import Button from '../Button/Button';
import './SideBar.css';
import { ReactComponent as Polygon } from '../../assets/Polygon1.svg';
import { ReactComponent as Polygon2 } from '../../assets/Polygon2.svg';


function SubContainer (){
    return (
        <div className="SubContainer">
          <h2 className="SubText">
            Boost Your <Polygon/><br></br>Sales Fast!
          </h2><Polygon2/>
          <Button classes="buttons" text="Explore Pro"/>

            
    
        </div>
      );


}

export default SubContainer;
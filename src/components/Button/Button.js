
import './Button.css';

const Button = ({onClick,classes,text}) => {
    return (
        <div onClick={onClick} className={classes} >
            {text}

        </div>
     );
}
 
export default Button;
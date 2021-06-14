import React, { useRef } from 'react';
import Banner2 from '../HomePage/banner2.jpg';
import './Carousel.css';

const Carousel = () => {
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    var counter = 1;
    setInterval(function () {
        const myInput = eval("input" + counter).current;
        if (myInput) {
            myInput.checked = true;
        }
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 4000);
    return (
        <>  <div class="slider">
            <div class="slides">
                <input ref={input1} type="radio" name="radio-btn" id="radio1" />
                <input ref={input2} type="radio" name="radio-btn" id="radio2" />
                <input ref={input3} type="radio" name="radio-btn" id="radio3" />
                <div className="slide first">
                    <img src={Banner2} alt="" />
                </div>
                <div className="slide">
                    <img src={Banner2} alt="" />
                </div>
                <div className="slide">
                    <img src={Banner2} alt="" />
                </div>
            </div>
            <div className="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
            </div>
        </div>
        </>
    )
}
export default Carousel;
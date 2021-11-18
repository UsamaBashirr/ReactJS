import React from "react";
import { useState } from "react/cjs/react.development";

const ChangeColor = () => {

    let yellow = "Yellow";
    const [bg , setBg] = useState(yellow);
    const [name , setName] = useState('Click Me');
    // const newBg = useState()
    const bgchange = () => {
        let newColor = "Blue";
        setBg(newColor);
        setName("Ouuch !!");
    };

    return (
        <>
            <div style={{ backgroundColor : bg , height : '60px', width : '200px', paddingTop : '30px'}}>
                <center><button onClick={bgchange}>{name}</button></center>
            </div>
        </>
    );
};

export default ChangeColor;
import React from "react";
import { useState } from "react/cjs/react.development";

const GetTime = () => {

    const currTime = new Date().toLocaleTimeString();

    const [oldTime , setCount] = useState(currTime);

    const income = () => {
        let currrTime = new Date().toLocaleTimeString();
        setCount(currrTime);
    };
    setInterval(income,1000);
    return (
        <>
            <h1>{oldTime}</h1>
            {/* <button onClick={income}>Click Me</button> */}
        </>
    );
};

export default GetTime;
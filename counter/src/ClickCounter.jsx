import { useState } from "react/cjs/react.development";

const ClickCounter = () => {

    const state = useState();
    const [count , setCount] = useState(0);
    
    const income = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={income}>Click Me</button>
        </>
    );
};
export default ClickCounter;

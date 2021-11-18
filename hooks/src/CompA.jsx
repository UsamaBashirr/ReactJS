import { useEffect, useState } from "react";


const CompA = () => {
    const [num , setNum] = useState(0);
    useEffect (() => {
        document.title = `You Clicked me ${num} Times`;
    });

    return (
        <>
            <button onClick={() => {
                setNum(num + 1);
            }}> Click Me {num} </button>
        </>
    );
};

export default CompA;
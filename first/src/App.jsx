import React from "react";
import './index.css';

function App()
{
    // const heading = {
    //   color: 'black',
    //   textAlign: "center",
    //   fontWeight: "bold",
    //   textTransform: "capitalize",
    //   textShadow: '0px 2px 4px brown',
    //   margin: '50px 0px',
    //   fontFamily: '"Josefin Slab", serif',
    // }

    // const name  = "Usama";
    // const date = new Date().toLocaleDateString();
    // const time = new Date().toLocaleTimeString();
    // const img1 = "https://picsum.photos/200/300";
    // const img2 = "https://picsum.photos/250/300";
    // const img3 = "https://picsum.photos/300/300";
    const cssStyle = {};

    let currTime = new Date(2021,11,2,1);
    currTime = currTime.getHours();
    let greetings = "";
    if(currTime >= 1 && currTime < 12)
    {
    greetings = "Good Morning";
    cssStyle.color = "Green";
    }
    else if(currTime >= 12 && currTime < 19)
    {
    greetings = "Good AfterNoon";
    cssStyle.color = "Blue";
    }
    else
    {
    greetings = "Good Night";
    cssStyle.color = "Black";
    }

    return (
        <>
            <div className="Greeting">
            <h3>Hello Sir, <span style={cssStyle}>{greetings}</span></h3>
            </div>
                {/* <p style={heading}>{`Hello Mr ${name}`}</p>
                <p className="heading">{`Today's Date is ${date}`}</p>
                <p className="heading">{`Today's Time is ${time}`}</p>
                <div className="images_div">
                    <img src={img1} alt="Random Images" />
                    <img src={img2} alt="Random Images" />
                    <img src={img3} alt="Random Images" />
                </div> */}
            </> 
    );
}

export default App;
import { useState } from "react";

const FormInput = () =>
{
    const [detail , setFullName] = useState( 
        {
            InName : "",
            InPassword : "",
            InEmail : "",
            InContact : "",
        }
    );

    const inputEvent = (event) => {

        const { value, name } = event.target;
        // const value = event.target.value;
        // const name = event.target.name;

        setFullName((preValue) =>{
            return {
                ...preValue,
                [name] : value,
            };
            // if(name === "InName") {
            //     return {
            //         InName : value,
            //         InPassword : preValue.InPassword,
            //         InEmail : preValue.InEmail,
            //         InContact : preValue.InContact,
            //     };
            // }
            // else if(name === "InPassword"){
            //     return {
            //         InName : preValue.InName,
            //         InPassword : value,
            //         InEmail : preValue.InEmail,
            //         InContact : preValue.InContact,
            //     };
            // }
            // else if(name === "InEmail"){
            //     return {
            //         InName : preValue.InName,
            //         InPassword : preValue.InPassword,
            //         InEmail : value,
            //         InContact : preValue.InContact,
            //     };
            // }
            // else if(name === "InContact"){
            //     return {
            //         InName : preValue.InName,
            //         InPassword : preValue.InPassword,
            //         InEmail : preValue.InEmail,
            //         InContact : value,
            //     };
            // };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    };
    // const [name , setName] = useState("");
    // const [fullName , setFullName] = useState("");

    // const [pass , setPass] = useState("");
    // const [password , setPassword] = useState("");

    // const formSubmit = (event) => {
    //     event.preventDefault();
    //     setFullName(name);
    //     setPassword(pass);
    // };


    // const inputEvent = (event) => {
    //     setName(event.target.value);
    // };

    // const formPass = (event) => {
    //     setPass(event.target.value);
    // };

    return (
        <>
            <form onSubmit={formSubmit}>
                <h1>Hello {detail.InName} {detail.InPassword}</h1>
                <p>{detail.InEmail} {detail.InContact}</p>
                <input onChange={inputEvent} type="text" placeholder="Enter Your name" name="InName" value={detail.InName} />
                <input onChange={inputEvent} type="text" placeholder="Enter Password" name="InPassword" value={detail.InPassword} />
                <input onChange={inputEvent} type="email" placeholder="Enter Email" name="InEmail" value={detail.InEmail} />
                <input onChange={inputEvent} type="text" placeholder="Enter Contact" name="InContact" value={detail.InContact} />
                <button type="submit">Click Me</button>
            </form>
        </>
    );
};

export default FormInput;
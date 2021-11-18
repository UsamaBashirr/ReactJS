import { NavLink } from "react-router-dom";
const Button = () => {
    return (
        <>
            <NavLink exact activeClassName = "active_class" to = "/">About</NavLink>
            <NavLink exact activeClassName = "active_class" to = "/Contact">Contact</NavLink>
        </>
    );
};

export default Button;
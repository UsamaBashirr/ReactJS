const Button = ({text, color, onClick}) => {
    return (
        <button style={{backgroundColor : color}} onClick={onClick} className="btn">{text}</button>
    );
};
Button.defaultProps ={
    
}

export default Button;
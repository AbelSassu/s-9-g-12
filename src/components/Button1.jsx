const Button = (props) => {
    return (
        <button onClick={() => alert(`${props.label}`)}>{props.label}</button>
    );
};

export default Button;

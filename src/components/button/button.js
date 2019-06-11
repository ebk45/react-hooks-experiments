import React from "react";

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick}> 
            Click Me
        </button>
    )
};

export default Button;
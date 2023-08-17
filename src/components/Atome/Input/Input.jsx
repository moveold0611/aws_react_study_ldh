import React from 'react';

function Input({ type, name, isDisabled, isAutoFocus, placeholder, onChange, onKeyUp }) {
    return (
        <div>
            <input type={type}
            name={name}
            disabled={isDisabled}  
            autoFocus={isAutoFocus} 
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp} />
        </div>
    );
}




Input.defaultProps = {
    type : "text",
    isDisabled : false,
    isAutoFocus : false,
    placeholder : "",
    onChange : null,
    onKeyUp : null
}

export default Input;
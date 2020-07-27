import React from 'react';

const InputField = (props) => {
    return (
        <label htmlFor={props.name}>
            {props.title}
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                checked={props.checked}
                onChange={props.change}
            />
        </label>
    )
}

export default InputField;
import React from 'react';

const InputField = (props) => {
    return (
        <label htmlFor={props.name}>
            {props.title}
            <input
                type={props.type}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value ? props.value : undefined}
                checked={props.checked ? props.checked : undefined}
            />
        </label>
    )
}

export default InputField;
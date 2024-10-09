import React from 'react'
import './InputField.css'

export function InputField({ label, type, placeholder, value, onChange }) {
    return (
        <div className='input-field-container'>
            <label className='input-field-label'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='input-field'
            />
        </div>
    );
}
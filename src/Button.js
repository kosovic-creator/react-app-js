import React from 'react';



function Button({ text, bgColor, color }) {
    return <button style={{ backgroundColor: bgColor, color: color }}>{text}</button>
}
export default Button
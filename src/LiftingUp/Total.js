import React from 'react'
import Button from '../Button';


const Total = ({ kupon }) => {
    return (
        <div>
            <div>Total: {kupon}</div>
            <Button text="Total" bgColor="blue" color='white' />
        </div>
    )
}

export default Total
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Button from '../Button';

const Promotions = ({ kupon, setKupon }) => {
    setKupon('10');
    return (
        <>

            <div>Promotions: {kupon}</div>
            <Button text="Promotion" bgColor="red" color='white' />
        </>

    )
}

export default Promotions
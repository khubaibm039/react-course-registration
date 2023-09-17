// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ card, handleClickToSelect }) => {
    // eslint-disable-next-line react/prop-types
    const { img, title, description, credit, price } = card;
    return (
        <div className='p-4 shadow-2xl rounded-lg bg-white'>
            <img className='w-full' src={img} alt="" />
            <h3 className=" text-md font-bold py-4">{title}</h3>
            <p><small>{description}</small></p>
            <div className='flex justify-between py-6'>
                <p>$ Price : {price}</p>
                <p> Credit : {credit}hr</p>
            </div>
            <button onClick={() => handleClickToSelect(card)} className=' bg-blue-500 text-center w-full p-2 rounded-lg'>Select</button>
        </div>
    );
};

export default Card;
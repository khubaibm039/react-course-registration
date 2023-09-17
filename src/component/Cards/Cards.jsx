// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

// eslint-disable-next-line react/prop-types
const Cards = ({ handleClickToSelect }) => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])
    return (
        <div className='w-3/4'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cards.map((card, idx) => <Card key={idx} card={card} handleClickToSelect={handleClickToSelect}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;
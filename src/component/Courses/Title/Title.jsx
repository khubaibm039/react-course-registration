/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Title = ({ title }) => {

    return (
        <div>
            <ul>
                <li>{title.title}</li>
            </ul>
        </div>
    );
};

export default Title;
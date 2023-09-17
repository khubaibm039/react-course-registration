// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from './Title/Title';

// eslint-disable-next-line react/prop-types
const Courses = ({ courseName, remaining, credit, price }) => {

    return (
        <div className=' w-1/4'>
            <div className='bg-white ml-4 w-full p-4 rounded-lg'>
                <h3 className='font-bold text-xl'>Credit Hour Ramaining : {remaining}</h3>
                <p className="border border-gray-300 my-4"></p>
                <h3 className='font-bold text-xl'>Course Name  </h3>

                {
                    // eslint-disable-next-line react/prop-types
                    courseName.map((title, ids) => <Title title={title} key={ids}></Title>)
                }
                <p className="border border-gray-200 my-4"></p>
                <h4 className='font-bold'>Total Credit : {credit} </h4>
                <p className="border border-gray-200 my-4"></p>
                <h3 className='font-bold'>Total Price : {price}</h3>

            </div>

        </div>
    );
};

export default Courses;
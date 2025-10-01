import React from 'react';

const link = ({route}) => {
    return (
        <div>
            <li className='lg:mr-10 px-4 hover:bg-amber-400'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default link;
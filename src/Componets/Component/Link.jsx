import React from 'react';

const link = ({route}) => {
    return (
        <div>
            <li className=''>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default link;
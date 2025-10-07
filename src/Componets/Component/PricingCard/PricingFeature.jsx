import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({features}) => {
    console.log(features)
    return (
        <p className='flex mt-4'> <CircleCheckBig className='mr-2'></CircleCheckBig> {features}</p>
    );
};

export default PricingFeature;
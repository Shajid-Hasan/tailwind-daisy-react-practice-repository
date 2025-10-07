import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {

    const { title, price, description, features } = pricing

    return (
        <div className='flex flex-col border-1 bg-[#EF7722] text-white rounded-4xl p-4'>
            {/* Card Header */}
            <div className=''>
                <h1 className='text-7xl'>{title}</h1>
                <h4 className='text-3xl mt-5'>{price}</h4>
            </div>
            {/* Card-body */}
            <div className='bg-[#FAA533] p-4 rounded-2xl my-4 flex-1'>
                <h3>{description}</h3>
                <h3>{features}</h3>
                {
                    features.map((features, index) => <PricingFeature key={index} features={features}></PricingFeature>)
                }
            </div>
            <button className="btn w-full bg-[#0BA6DF] text-2xl text-white border-none shadow-none">Subscribe</button>

        </div>
    );
};

export default PricingCard;
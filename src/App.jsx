import React, { Suspense } from 'react';
import NavBar from './Componets/Component/NavBar';
import Carousel from './Componets/Component/Carousel/Carousel';
import PricingOption from './Componets/Component/PricingOption/PricingOption';


const pricingPromise = fetch('pricingData.json')
.then(res => res.json())



const App = () => {
  return (
    <>
    <header>
        <NavBar></NavBar>
    </header>
    
    <main>
      <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
    </main>
      <Carousel></Carousel>
    </>
  );
};

export default App;
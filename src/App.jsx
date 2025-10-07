import React, { Suspense } from 'react';
import NavBar from './Componets/Component/NavBar';
import Carousel from './Componets/Component/Carousel/Carousel';
import PricingOption from './Componets/Component/PricingOption/PricingOption';
import ResultsChart from './Componets/Component/ResultsChart/ResultsChart';
import ThreeDimScatterChart from './Componets/Component/ResultsChart/ThreeDimScatterChart';


const pricingPromise = fetch('pricingData.json')
.then(res => res.json())



const App = () => {
  return (
    <>
    <header>
        <NavBar></NavBar>
    </header>
    <Carousel></Carousel>
    <main>
      <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
      <ResultsChart></ResultsChart>
      <ThreeDimScatterChart></ThreeDimScatterChart>
    </main>
    </>
  );
};

export default App;
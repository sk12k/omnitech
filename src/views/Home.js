import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01"  />
      <FeaturesTiles topDivider/>
      <FeaturesSplit invertMobile topDivider bottomDivider imageFill className="illustration-section-02" />
      <Testimonial  />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;
import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import FAQs from '../components/sections/FAQs/FAQs';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01"  />
      <FeaturesTiles topDivider/>
      <FeaturesSplit invertMobile topDivider bottomDivider imageFill  />
      {/* <Testimonial  bottomDivider /> */}
      <FAQs  />
      <Cta split  />
    </>
  );
}

export default Home;
import React from 'react';
import dog from '../src/images/dog.jpg';
import Common from './Common';

const Home = () =>{
  return(
    <>
      <Common
      name='Capture your moments with'
      imgsrc={dog}
      visit="/service"
      btname="Get Started"/>
  
    </>

  );
};

export default Home;

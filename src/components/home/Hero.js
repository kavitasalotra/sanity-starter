import React from 'react';
import Heading from '../atoms/Heading';
import Description from '../atoms/Description'

function Hero() {
  return (
    <div className="bg-[url('/images/background-image-2.jpg')] py-6 bg-cover object-cover object-top md:h-[80vh]">
      <div className="md:max-w-xl  flex flex-col justify-center items-center text-center xl:space-y-6 space-y-3 md:p-6 p-3  bg-black/30 mx-auto h-full">
        <Heading>Sofa Grace</Heading>
        <Description>
          Score new arrivals from latest items Multipurpose eCommerce template
          ready
        </Description>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Cyan to Blue
        </button>
      </div>
    </div>
  );
}

export default Hero;

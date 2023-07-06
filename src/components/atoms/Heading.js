import React from 'react';

function Heading({ children }) {
  return (
    <h1
      className="font-bold text-white md:text-5xl text-xl tracking-normal">
      {children}
    </h1>
  );
}

export default Heading;

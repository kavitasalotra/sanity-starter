import React from 'react';

function Title({ children }) {
  return (
    <h5 className="md:text-3xl text-lg text-brand font-bold capitalize">{children}</h5>
  );
}

export default Title;

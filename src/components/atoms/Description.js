import React from 'react';

function Description({ children, textBrand,className }) {
  return (
    <p
      className={`md:text-base text-xs ${className} ${
        textBrand ? 'text-brand font-normal' : 'text-white'
      } font-normal `}>
      {children}
    </p>
  );
}

export default Description;

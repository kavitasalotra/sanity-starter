import React from 'react';

function Description({ children, textBrand }) {
  return (
    <p
      className={`text-base ${
        textBrand ? 'text-brand font-bold' : 'text-textGray'
      } font-normal `}>
      {children}
    </p>
  );
}

export default Description;

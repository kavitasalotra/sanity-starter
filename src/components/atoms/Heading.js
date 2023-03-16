import React from 'react';

function Heading({ children, hasTextLarge }) {
  return (
    <h1
      className={`${
        hasTextLarge ? 'text-6xl' : 'text-4xl'
      } font-bold text-brand tracking-normal`}>
      {children}
    </h1>
  );
}

export default Heading;

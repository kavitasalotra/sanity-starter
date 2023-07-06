import React from 'react';

function SubTitle({ children, hasTextLarge }) {
  return (
    <h3
      className={`md:text-base text-xs ${
        hasTextLarge ? 'text-lg' : 'text-xl'
      } font-normals `}
    >
      {children}
    </h3>
  );
}

export default SubTitle;

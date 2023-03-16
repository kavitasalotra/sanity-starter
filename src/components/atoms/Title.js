import React from 'react';

function Title({ children }) {
  return (
    <h5 className="text-2xl text-textLight font-bold capitalize">{children}</h5>
  );
}

export default Title;

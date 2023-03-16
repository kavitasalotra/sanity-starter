import React from 'react';

function Button({ children, className }) {
  return (
    <button
      type="button"
      className={`inline-block rounded border border-brand ${className} text-base font-medium text-textGray hover:bg-brand focus:outline-none focus:ring active:bg-brand`}>
      {children}
    </button>
  );
}

export default Button;

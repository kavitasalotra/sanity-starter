import React from 'react';

function Button({ children, className }) {
  return (
    <button
      type="button"
      className={`inline-block rounded border px-3 py-2 border-white ${className} text-base font-medium text-white  focus:outline-none focus:ring active:bg-brand`}>
      {children}
    </button>
  );
}

export default Button;

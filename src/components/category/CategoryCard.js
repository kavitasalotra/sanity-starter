import React from 'react';
import Button from '../atoms/Button'

function CategoryCard({ item }) {
  return (
    <a href="/" className="group relative block bg-black rounded-lg">
      <img
        alt="Developer"
        src={item.image}
        className="absolute inset-0 h-full  rounded-lg w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white">
          {item.label}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{item.categoryTitle}</p>

        <div className="mt-32 sm:mt-36 text-center">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-6 group-hover:opacity-100">
            <p className="text-sm text-white mb-4">
              {item.description}
            </p>
            <Button>Hamah</Button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CategoryCard;

import React from 'react';
import CategoryCard from './CategoryCard';
import ComponentHeader from '../global/ComponentHeader';

const categories = [
  {
    id: 1,
    categoryTitle: 'Bedroom',
    image: '/images/category-image-1.jpg',
    label: '2020 collections',
    description: 'Lorem ipsum dolor, sit amet consectetur',
  },
  {
    id: 2,
    categoryTitle: 'Kitchen',
    image: '/images/category-image-2.jpg',
    label: '2020 collections',
    description: 'Lorem ipsum dolor, sit amet consectetur',
  },
  {
    id: 3,
    categoryTitle: 'Living room',
    image: '/images/category-image-3.jpg',
    label: '2020 collections',
    description: 'Lorem ipsum dolor, sit amet consectetur',
  },
];

function Categories() {
  return (
    <div className="container mx-auto px-4 md:px-6  md:py-16 py-10">
      <div>
        <ComponentHeader textBrand title="Featured Categories" description="We just keep things minimal." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {categories.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;

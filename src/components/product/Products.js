import React from 'react'
import ProductCard from './ProductCard'
import ComponentHeader from '../global/ComponentHeader';

const products = [
    {
      id: 1,
      product: 'Anna',
      image: '/images/category-image-1.jpg',
      totalPrice: 129,
      discountPrice: 119,
      
    },
    {
      id: 2,
      product: 'Lucy',
      image: '/images/category-image-1.jpg',
      totalPrice: 129,
      discountPrice: 119,
    },
    {
      id: 3,
      product: 'Ella',
      image: '/images/category-image-1.jpg',
      totalPrice: 129,
      discountPrice: 119, 
    },
    {
        id: 4,
        product: 'Nora',
        image: '/images/category-image-1.jpg',
        totalPrice: 129,
        discountPrice: 119,
        
      },
      {
        id: 5,
        product: 'Sophie',
        image: '/images/category-image-1.jpg',
        totalPrice: 129,
        discountPrice: 119,
        
      },
      {
        id: 6,
        product: 'Grace',
        image: '/images/category-image-1.jpg',
        totalPrice: 129,
        discountPrice: 119,
        
      },
  ];

const Products = () => {
  return (
    <div className="container mx-auto px-4 md:px-6  md:py-16 py-10">
    <div>
      <ComponentHeader textBrand title="Popular Products" description="We just keep things minimal." />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  )
}

export default Products
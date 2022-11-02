import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div className='py-10'>
            <div className='text-center'>
                <p className='text-lg font-semibold text-orange-600'>Popular Products</p>
                <h2 className='text-4xl font-bold'>Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    <ProductCard></ProductCard>
                }
            </div>
        </div>
    );
};

export default Products;
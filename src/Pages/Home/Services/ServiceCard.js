import React from 'react';
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-lg font-semibold text-orange-600'>Price: ${price}</p>
                    <button className="btn btn-sm bg-orange-600 hover:bg-orange-700 border-0 text-white"> <FaArrowRight /> </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
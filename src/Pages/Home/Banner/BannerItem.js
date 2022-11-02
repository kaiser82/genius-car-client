import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2 space-x-5">
                <h1 className='text-6xl font-bold text-white'> Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-2/3 space-x-5">
                <p className='text-xl  text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-3/4 space-x-5">
                <button className='btn btn-error'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  my-24 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className=" rounded-lg shadow-2xl w-4/5" />
                    <img src={parts} alt="" className=" rounded-lg shadow-2xl absolute w-1/2 h-2/3 top-1/2 right-5" />
                </div>
                <div className='w-1/2'>
                    <p className='py-4 text-xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
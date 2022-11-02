import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-orange-600 font-semibold text-xl'>Service</p>
                <h2 className='text-5xl font-bold'>Our Service Ares</h2>
                <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline btn-error'>More Services</button>
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import { MapPin, Ruler, HandCoins } from 'lucide-react';

function HouseSale() {
    return (
        <section className='flex'>


            <div className="container mx-auto  px-4 py-6 my-20">

                <h1 className='text-4xl text-white font-bold text-center'>For Sale</h1>

                <div className='grid grid-cols-4 gap-4 my-8'>

                    <div className='justify-items-center w-75 h-100 rounded-2xl px-3 py-3 shadow-2xl bg-white '>
                        <img src="images/house.jpg" alt="" width={400} height={500} />
                        <p className='my-5 text-black text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, culpa?</p>

                        <div className=' flex space-x-2 container'>

                            <MapPin color='#2576b9' size={20} />
                            <p className='text-black'>makkah</p>

                            <div className='w-0.5 bg-blue-500' />

                            <Ruler color='#2576b9' size={20} />
                            <p className='text-black'>sqft</p>


                            <div className='w-0.5 bg-blue-500' />
                            <HandCoins color='#2576b9' size={20} />
                            <p className='text-black'>1800</p>

                        </div>
                    </div>


                    <div className='justify-items-center w-75 h-100 rounded-2xl px-3 py-3 shadow-2xl bg-white '>
                        <img src="images/house2.jpg" alt="" width={400} height={500} />
                        <p className='my-5 text-black text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, culpa?</p>

                        <div className=' flex space-x-2 container'>

                            <MapPin color='#2576b9' size={20} />
                            <p className='text-black'>makkah</p>

                            <div className='w-0.5 bg-blue-500' />

                            <Ruler color='#2576b9' size={20} />
                            <p className='text-black'>sqft</p>

                            <div className='w-0.5 bg-blue-500' />
                            <HandCoins color='#2576b9' size={20} />
                            <p className='text-black'>1800</p>



                        </div>
                    </div>

                    <div className='justify-items-center w-75 h-100 rounded-2xl px-3 py-3 shadow-2xl bg-white '>
                        <img src="images/room3.jpg" alt="" width={400} height={500} />
                        <p className='my-5 text-black text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, culpa?</p>

                        <div className=' flex space-x-2 container'>

                            <MapPin color='#2576b9' size={20} />
                            <p className='text-black'>makkah</p>

                            <div className='w-0.5 bg-blue-500' />

                            <Ruler color='#2576b9' size={20} />
                            <p className='text-black'>sqft</p>

                            <div className='w-0.5 bg-blue-500' />
                            <HandCoins color='#2576b9' size={20} />
                            <p className='text-black'>1800</p>



                        </div>
                    </div>

                    <div className='justify-items-center w-75 h-100 rounded-2xl px-3 py-3 shadow-2xl bg-white '>
                        <img src="images/budget.jpg" alt="" width={400} height={500} />
                        <p className='my-5 text-black text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, culpa?</p>

                        <div className=' flex space-x-2 container'>

                            <MapPin color='#2576b9' size={20} />
                            <p className='text-black'>makkah</p>

                            <div className='w-0.5 bg-blue-500' />

                            <Ruler color='#2576b9' size={20} />
                            <p className='text-black'>sqft</p>

                            <div className='w-0.5 bg-blue-500' />
                            <HandCoins color='#2576b9' size={20} />
                            <p className='text-black'>1800</p>



                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}

export default HouseSale;
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";


function Footer() {
    return (
        <section className='flex bg-zinc-900 '>
            <dev className='container h-70 mx-auto py-14'>


                <div className='flex space-x-5 justify-center'>
                    <h1 className='font-bold'>Dream house</h1>
                    <label>Why Us</label>
                    <label>About</label>
                    <label>For Sale</label>
                    <label>Contact US</label>

                </div>



                <div className=' py-5 space-x-3'>

                    <p className='py-5'>Contact information</p>

                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-white" />
                        <p className="text-white">+654123456789</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <IoMdMail className="text-white" />
                        <p className="text-white">info@housesalw.com</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <MdLocationOn className="text-white" />
                        <p className="text-white">makkah</p>
                    </div>


                </div>

            </dev>


        </section>
    );
}

export default Footer;
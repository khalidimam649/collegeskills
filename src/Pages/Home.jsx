import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import girlImage from "../assets/hero.png";
import { CalendarRange, Mail, Play } from 'lucide-react';
import student from '../assets/student.webp'

function Home() {
    return (
        <>
            <Navbar />
            <section className="bg-brand-background lg:px-16 px-10 py-16 grid md:grid-cols-2 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-text font-oswald">
                        <span className="text-brand-primary">Studying</span> Online Is Now <br />
                        Much Easier
                    </h1>
                    <p className="text-brand-text font-barlow ">
                        Skilline is an interesting platform that will teach you in a more
                        interactive way
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="bg-[#FF9E0D] text-white px-6 py-3 rounded-full font-semibold">
                            Join For Free
                        </button>
                        <Play size={50} className='flex bg-white p-2 text-brand-primary rounded-full' />
                    </div>
                </div>

                <div className="relative mt-12 md:mt-0">
                    <img
                        src={girlImage}
                        alt="student"
                        className="w-full max-w-sm mx-auto"
                    />

                    <div className="absolute top-6 left-2 bg-gradient-to-tr to-white/10 from-white rounded-xl shadow-lg px-4 py-3 lg:flex gap-2 hidden">
                        <CalendarRange size={30} className='bg-blue-400 text-white p-1 rounded-lg' />
                        <div>
                            <h4 className="text-[16px] font-semibold">250k</h4>
                            <p className="text-[16px] text-gray-500">Assisted Student</p>
                        </div>
                    </div>

                    <div className="absolute bottom-16 left-0 bg-gradient-to-tr to-white/10 from-white rounded-xl shadow-lg px-4 py-4 lg:flex hidden gap-2 items-center">
                        <img src={student} alt="" className="w-8 h-8 rounded-full" />
                        <div>
                            <p className="text-sm font-medium">User Experience Class</p>
                            <p className="text-xs text-gray-500">Today at 12.00 PM</p>
                        </div>
                        <button className="ml-4 bg-[#FF9E0D] text-white px-3 py-1 rounded-full text-sm">
                            Join Now
                        </button>
                    </div>

                    <div className="absolute bottom-6 right-0 bg-gradient-to-tr to-white/10 from-white rounded-xl shadow-lg px-4 py-4 lg:flex hidden gap-2 items-center">
                        <Mail size={30} className='bg-orange-400 text-white p-1 rounded-lg' />
                        <div>
                            <p className="text-sm font-medium">Congratulations</p>
                            <p className="text-xs text-gray-500">Your admission completed</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home




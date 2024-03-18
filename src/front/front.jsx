import React, { useState, useEffect } from 'react';
import './front.css';

const FullScreenComponent = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const images = ['/sofa1.jpg', '/sofa2.jpg', '/sofa3.jpg']; // Add more image paths if needed
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) { // User starts scrolling
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((bgIndex + 1) % images.length);
        }, 10000); // Change background every 10 seconds

        return () => clearInterval(interval);
    }, [bgIndex, images.length]);

    const bgImageUrl = images[bgIndex];

    const handleScrollToSection = (id) => {
        setHasScrolled(true); 
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const section = document.querySelector(`#${id}`);
        if (section) {
            const offsetTop = section.offsetTop - navbarHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative max-w-full h-screen w-screen overflow-clip">
            <div class="slider">
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
            </div>
            {/* Navigation and other content */}
            <nav className={`fixed top-0 left-0  right-0 z-50 ${hasScrolled ? 'bg-black py-2' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white">
                            <a href="#page-top" className={`text-xl font-bold `}>
                                <img src="/navbar-logo.svg" alt="Logo" className="h-8" />
                            </a>
                        </div>
                        <div className="lg:hidden">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i className="fas fa-bars ms-1"></i>
                            </button>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="flex items-center space-x-10 text-2xl">
                                <li><a className="text-white" onClick={() => handleScrollToSection('product')}>Product</a></li>
                                <li><a className="text-white" onClick={() => handleScrollToSection('about')}>Portfolio</a></li>
                                <li><a className="text-white" onClick={() => handleScrollToSection('about')}>About</a></li>
                                <li><a className="text-white" onClick={() => handleScrollToSection('team')}>Team</a></li>
                                <li><a className="text-white" onClick={() => handleScrollToSection('contact')}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
                <h2 className="text-4xl font-bold text-white mb-5 font-serif italic">Welcome To Our Studio!</h2>
                <h1 className="text-8xl font-bold text-white mb-10 uppercase">It's Nice To Meet You</h1>
                <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-2xl py-4 px-8">
                    Tell Me More
                </button>
            </div>
        </div>
    );
};

export default FullScreenComponent;

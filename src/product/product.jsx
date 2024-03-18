import React, { useState, useEffect } from 'react';

function VegetableShop() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [intervalId, setIntervalId] = useState(null);
    const [cardWidth, setCardWidth] = useState(0); // State to store the width of the product cards

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoSlide) {
                setCurrentIndex((currentIndex + 1) % vegetableItems.length);
            }
        }, 10000); // Change slide every 10 seconds
        setIntervalId(interval);

        // Calculate and store the width of the product cards
        const card = document.querySelector('.product-card');
        if (card) {
            setCardWidth(card.offsetWidth);
        }

        return () => clearInterval(interval);
    }, [currentIndex, autoSlide]);

    const handleSlide = (direction) => {
        setAutoSlide(false);
        clearInterval(intervalId);
        if (direction === 'left') {
            setCurrentIndex((currentIndex - 1 + vegetableItems.length) % vegetableItems.length);
        } else {
            setCurrentIndex((currentIndex + 1) % vegetableItems.length);
        }
    };

    const startIndex = currentIndex;
    let endIndex = (currentIndex + 2) % vegetableItems.length;

    if (endIndex < startIndex) {
        endIndex += vegetableItems.length;
    }

    return (
        <div className="pt-12 overflow-hidden" id="product">
            <div className="flex justify-center mb-8"> {/* Center align the main heading */}
                <h1 className="text-6xl font-bold">Products</h1>
            </div>

            <div className="flex justify-end items-center mt-2 mb-0.5 mr-60">
                <div className="flex justify-end">
                    <button onClick={() => handleSlide('left')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Slide Left
                    </button>
                    <button onClick={() => handleSlide('right')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Slide Right
                    </button>
                </div>
            </div>

            <div className="flex justify-center overflow-x-hidden">
                {vegetableItems.map((item, index) => {
                    const adjustedIndex = (index + vegetableItems.length - startIndex) % vegetableItems.length;
                    return (
                        <div key={index} className={`group my-5 mx-4 flex w-full max-w-96 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ${adjustedIndex > 2 ? 'hidden' : ''} product-card`}>
                            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={item.image} alt={item.name} />
                                <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={item.secondImage} alt={item.name} />
                                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" />
                                </svg>
                            </a>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
                                </a>
                                <p className="text-gray-600">{item.description}</p>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">${item.price}</span>
                                    </p>
                                </div>
                                <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Know more
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

            )};

export default VegetableShop;






const vegetableItems = [
    {
        name: 'Parsely',
        image: '/img/vegetable-item-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price: '4.99'
    },
    {
        name: 'Parsely',
        image: 'img/vegetable-item-1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price: '4.99'
    },
    {
        name: 'Banana',
        image: 'img/vegetable-item-3.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price: '7.99'
    },
    {
        name: 'Bell Papper',
        image: 'img/vegetable-item-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price: '7.99'
    },
    {
        name: 'Potatoes',
        image: 'img/vegetable-item-5.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price: '7.99'
    },
    {
        name: 'Potatoes',
        image: 'img/vegetable-item-5.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price: '7.99'
    }
    // More vegetable items...
];

 
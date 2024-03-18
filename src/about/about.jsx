import React from 'react';

const About = () => {
    return (
        <div className="px-6 pt-1 pb-1 bg-red-400" id="about">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-6xl font-bold text-center mb-12 uppercase">About Us</h1>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12">
                    <div className="w-full lg:w-1/2 lg:mr-6">
                        <img src="../../img/hero-img-1.png" alt="About Image" className="w-full rounded-lg shadow-md mb-6" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:ml-6">
                        <p className="text-xl leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer laoreet pretium felis, at auctor quam. Aliquam eget ullamcorper ex. Vestibulum dapibus arcu nec efficitur consectetur. Mauris rutrum dictum erat, sed lobortis orci vestibulum ac. Nullam ut volutpat nisl. Ut ut tristique dolor. Vestibulum et metus id metus fringilla consectetur vel ut odio. Ut euismod augue sit amet neque faucibus, at tincidunt ligula sodales. Cras eleifend turpis at mauris fermentum, ut consequat purus tempor. Integer a urna mauris.
                        </p>
                        <p className="text-xl leading-relaxed mb-6">
                            Sed eu risus quam. Nulla facilisi. Etiam pellentesque lectus in arcu facilisis, sed suscipit ipsum fermentum. Sed interdum auctor tellus, sit amet suscipit metus venenatis sit amet. Integer congue felis sed risus hendrerit, nec facilisis tortor placerat. Phasellus dignissim ligula ut justo gravida, a egestas elit vestibulum. Aliquam tincidunt risus et enim vehicula posuere. In at odio vel orci dapibus pellentesque. Aliquam fermentum vehicula quam nec placerat.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between gap-x-14 mb-12">
                    <div className="w-full sm:w-1/2 md:w-1/4 text-center">
                        <div className="flex justify-center">
                            <div className="w-2/3 h-2 border-8 border-t-2 border-blue-500 rounded-full my-4"></div>
                        </div>
                        <p className="text-4xl font-bold text-blue-500">20+</p>
                        <p className="text-lg">Customers Believe Us</p>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 text-center">
                        <div className="flex justify-center">
                            <div className="w-2/3 h-2 border-8 border-t-2 border-blue-500 rounded-full my-4"></div>
                        </div>
                        <p className="text-4xl font-bold text-blue-500">350</p>
                        <p className="text-lg">Products We Have Sold</p>
                       
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 text-center">
                        <div className="flex justify-center">
                            <div className="w-2/3 h-2 border-8 border-t-2 border-blue-500 rounded-full my-4"></div>
                        </div>
                        <p className="text-4xl font-bold text-blue-500">5</p>
                        <p className="text-lg">Years of Experience</p>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 text-center">
                        <div className="flex justify-center">
                            <div className="w-2/3 h-2 border-8 border-t-2 border-blue-500 rounded-full my-4"></div>
                        </div>
                        <p className="text-4xl font-bold text-blue-500">99%</p>
                        <p className="text-lg">Customer Satisfaction</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

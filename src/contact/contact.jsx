import React from 'react';

const ContactUs = () => {
    return (
        <div className="px-6 py-12 bg-gray-200 border-solid ">
            <div className="container mx-auto px-6 py-12 bg-gray-200 border-solid border-zinc-950 border-8 flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-center mb-12 uppercase border-solid">Contact Us</h1>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-28 lg:justify-between mb-1 lg:mb-12 border-solid ">
                    <div className="w-full lg:w-1/2 lg:mr-6">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="example@example.com" />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel" placeholder="123-456-7890" />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" id="message" rows="4" placeholder="Write your message here"></textarea>
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 lg:ml-6  lg:mb-0">
                        {/* Map goes here */}
                        <iframe
                            title="Your Shop Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387786.0055776025!2d-74.433097642285!3d40.712775186082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08b8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1639107551667!5m2!1sen!2suk"
                            className="w-full h-screen lg:h-auto rounded-lg shadow-md"
                            frameBorder="0"
                            allowFullScreen=""
                            style={{ height: '400px' }} 
                        ></iframe>

                    </div>
                </div>

                {/* <div className="absolute inset-x-0 bottom-0 flex justify-center mb-6">
                    <div className="flex items-center space-x-4">
                        <p className="text-gray-700">Visit our website:</p>
                        <a href="/" className="text-blue-500 hover:underline">www.example.com</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ContactUs;

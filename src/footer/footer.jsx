import React from 'react';

function Footer() {
    return (
        <footer className="  bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">

            <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">

                <div className="me-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    {/* Social network icons */}
                    <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                        {/* Insert your SVG icon here */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                    </a>
                    <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
                        {/* Insert your SVG icon here */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </a>
                    <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                        {/* Insert your SVG icon here */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                    </a>
                    <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                        {/* Insert your SVG icon here */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Main container div */}
            <div className="mx-6 py-10  flex justify-center md:text-left">
                {/* <div className=" grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
                <div className="flex justify-center gap-80">
                
                    {/* Useful links section */}
                    <div>
                        <h1 className="mb-4 flex text-2xl justify-center font-semibold uppercase md:justify-start">Useful links</h1>
                        <p className="mb-4"><a href="#!">Pricing</a></p>
                        <p className="mb-4"><a href="#!">Settings</a></p>
                        <p className="mb-4"><a href="#!">Orders</a></p>
                        <p><a href="#!">Help</a></p>
                    </div>

                    {/* Contact section */}
                    <div>
                        <h6 className="mb-4 text-2xl  flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="me-3">
                                {/* Insert your SVG icon here */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M12 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1.5 10.75a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.5-6a3.5 3.5 0 0 0-3.5 3.5c0 .44.085.867.244 1.259l-.788.788A4.97 4.97 0 0 1 5 10.5C5 7.463 7.462 5 10.5 5s5.5 2.463 5.5 5.5-2.462 5.5-5.5 5.5a5.001 5.001 0 0 1-4.949-4h1.699c.454.13.917.203 1.394.203a7.5 7.5 0 0 0 7.5-7.5c0-4.142-3.358-7.5-7.5-7.5S4.5 3.858 4.5 8c0 .784.141 1.55.409 2.275l-.816.816c-.812-.98-1.318-2.196-1.318-3.591A8 8 0 0 1 12 4a8 8 0 0 1 7.89 7.097l-1.973 1.974A3.472 3.472 0 0 0 15 11.75z" clipRule="evenodd" />
                                </svg>
                            </span>
                            New York, NY 10012, US
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="me-3">
                                {/* Insert your SVG icon here */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4.5 12a7.5 7.5 0 0 1 7.5-7.5c.74 0 1.467.107 2.167.318l-1.822 3.644A3.5 3.5 0 0 0 8 12.5H4.5V12zm5.5 3.5a3.5 3.5 0 0 0 2.118-.726l1.821 3.643A7.494 7.494 0 0 1 12 19.5a7.5 7.5 0 0 1-7.5-7.5h4.5v1zm-5 0V11H8c0 .575.12 1.125.337 1.626l-2.337 4.675A7.49 7.49 0 0 1 4 12.5a7.5 7.5 0 0 1 2.167-5.303l2.337 4.676A3.476 3.476 0 0 0 8 12.5h-4z" clipRule="evenodd" />
                                </svg>
                            </span>
                            info@example.com
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="me-3">
                                {/* Insert your SVG icon here */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path d="M3.03 12.706l16.94-8.47A.5.5 0 0 1 21 4.5v15a.5.5 0 0 1-.543.5L3.03 11.294a.5.5 0 0 1 0-.588z" />
                                </svg>
                            </span>
                            +01 234 567 88
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <span className="me-3">
                                {/* Insert your SVG icon here */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2H21.25a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V2.75zM1.5 1a1.5 1.5 0 0 0-1.5 1.5v11.25c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V2.5A1.5 1.5 0 0 0 21.25 1H2.75z" clipRule="evenodd" />
                                    <path d="M15.007 6.524a2 2 0 1 0-2.014 2l.008-.001a2 2 0 0 0 2.006-2.002z" />
                                </svg>
                            </span>
                            +01 234 567 89
                        </p>
                    </div>

                </div>
            </div>

            {/* Copyright section */}
            <div className="bg-black/5 p-6 text-center">
                <span>© 2023 Copyright:</span>
                <a className="font-semibold" href="https://tw-elements.com/">BS Furniture</a>
            </div>
        </footer>
    );
}

export default Footer;

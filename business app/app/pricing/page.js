import React from 'react'

const page = () => {
    return (
        /*
                <div className="min-h-screen bg-gray-300 text-gray-800">
        
                    <div className="container p-4 lg:p-8 mx-auto">
                        <div className="text-center mt-4 lg:mt-8">
                            <div className="text-sm text-indigo-600 uppercase font-semibold tracking-wider">
                                Pricing Plans
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-1">
                                Choose the best plan for you
                            </h2>
                            <h3 className="text-lg md:text-xl text-gray-700 lg:w-1/2 lg:mx-auto mb-10">
                                Amazing features are included with each one but feel free to explore the possibilities based on your requirements.
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        
                            <div className="rounded-lg shadow-sm bg-white flex flex-col border-4 border-white">
                                <div className="p-5 lg:p-6 text-center flex-grow">
                                    <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                                        Freelancer
                                    </span>
                                    <div>
                                        <span className="text-3xl lg:text-5xl font-extrabold">$29</span>
                                        <span className="text-lg text-gray-600 font-semibold">/mon</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Best plan if you are a solo developer
                                    </p>
                                </div>
                                <div className="p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                                    <ul className="space-y-4 text-sm lg:text-base">
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>100</strong> Custom Projects</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>50</strong> Paying Clients</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>10GB</strong> SSD Storage</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>1TB</strong> High Speed Bandwidth</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>24/7</strong> Email Support</span>
                                        </li>
                                    </ul>
                                    <a className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full" href="javascript:void(0)">
                                        Get Started
                                    </a>
                                </div>
                            </div>
        
                            <div className="rounded-lg shadow-sm bg-white flex flex-col border-4 border-indigo-300">
                                <div className="p-5 lg:p-6 text-center flex-grow">
                                    <span className="inline-flex space-x-1 items-center text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                                        <span>Agency</span>
                                    </span>
                                    <div>
                                        <span className="text-3xl lg:text-5xl font-extrabold">$99</span>
                                        <span className="text-lg text-gray-600 font-semibold">/mon</span>
                                    </div>
                                    <p className="text-gray-600">
                                        For large teams working with many clients
                                    </p>
                                </div>
                                <div className="p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                                    <ul className="space-y-4 text-sm lg:text-base">
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>1000</strong> Custom Projects</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>200</strong> Paying Clients</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>100GB</strong> SSD Storage</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>10TB</strong> High Speed Bandwidth</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>24/7</strong> Email &amp; Skype Support</span>
                                        </li>
                                    </ul>
                                    <a className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-indigo-700 hover:bg-indigo-900 block w-full" href="javascript:void(0)">
                                        Get Started
                                    </a>
                                </div>
                            </div>
        
                            <div className="rounded-lg shadow-sm bg-white flex flex-col border-4 border-white">
                                <div className="p-5 lg:p-6 text-center flex-grow">
                                    <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
                                        Enterprise
                                    </span>
                                    <div>
                                        <span className="text-3xl lg:text-5xl font-extrabold">$299</span>
                                        <span className="text-lg text-gray-600 font-semibold">/mon</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Custom solutions for your needs
                                    </p>
                                </div>
                                <div className="p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
                                    <ul className="space-y-4 text-sm lg:text-base">
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>Unlimited</strong> Custom Projects</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>Unlimited</strong> Paying Clients</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>Unlimited</strong> SSD Storage</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>Unlimited</strong> High Speed Bandwidth</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="text-green-500 w-5 h-5 inline-block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                                            <span><strong>24/7</strong> Priority Email &amp; Skype Support</span>
                                        </li>
                                    </ul>
                                    <a className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full" href="javascript:void(0)">
                                        Get Started
                                    </a>
                                </div>
                            </div>
        
                        </div>
                    </div>
        
        
        
                    <div className="text-gray-600 text-center mt-6 space-y-2 text-sm">
                        <p className="font-semibold">
                            Pricing Tables © <script>document.write((new Date).getFullYear());</script>2023
                        </p>
                        <p className="inline-flex items-center space-x-1">
                            <span>Crafted with</span>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                            <span>by <a className="text-indigo-600 hover:text-indigo-700 font-semibold" href="https://pixelcave.com">pixelcave</a></span>
                        </p>
                    </div>
        
                </div>


                bg-gradient-to-t from-gray-950 to-gray-800
        */

        <section className="relative overflow-hidden h-[100vh]">
            <svg className="absolute scale-150 bottom-5 opacity-20" viewBox="0 0 2665 434" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.9978 424.81H2608.43L1540.02 9.18988H1124.4L55.9978 424.81Z" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1118.63 11.4336H1545.79" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1112.54 13.8054H1551.89" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1106.08 16.3166H1558.34" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1099.24 18.9799H1565.19" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1091.96 21.8095H1572.46" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1084.22 24.8214H1580.2" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1075.96 28.034H1588.46" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1067.13 31.4679H1597.29" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1057.68 35.1468H1606.75" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1047.52 39.0979H1616.9" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1036.58 43.3526H1627.84" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1024.77 47.9473H1639.65" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1011.98 52.9243H1652.45" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M998.071 58.3337H1666.35" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M982.904 64.2341H1681.52" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M966.293 70.6956H1698.13" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M948.024 77.8024H1716.4" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M927.836 85.6561H1736.59" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M905.407 94.3809H1759.02" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M880.345 104.13H1784.08" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M852.156 115.096H1812.27" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M820.215 127.522H1844.21" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M783.721 141.718H1880.7" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M741.625 158.094H1922.8" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M692.531 177.192H1971.89" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M634.535 199.753H2029.89" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M564.974 226.813H2099.45" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M480.005 259.867H2184.42" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M373.873 301.153H2290.55" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M237.545 354.186H2426.88" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2526.09 424.81L1526.61 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2443.75 424.81L1513.21 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2361.42 424.81L1499.8 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2279.08 424.81L1486.39 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2196.74 424.81L1472.99 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2114.41 424.81L1459.58 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M2032.07 424.81L1446.17 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1949.73 424.81L1432.76 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1867.4 424.81L1419.36 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1785.06 424.81L1405.95 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1702.73 424.81L1392.54 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1620.39 424.81L1379.14 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1538.05 424.81L1365.73 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1455.72 424.81L1352.32 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1373.38 424.81L1338.92 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1291.04 424.81L1325.51 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1208.71 424.81L1312.1 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1126.37 424.81L1298.69 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M1044.03 424.81L1285.29 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M961.698 424.81L1271.88 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M879.362 424.81L1258.47 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M797.025 424.81L1245.07 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M714.689 424.81L1231.66 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M632.352 424.81L1218.25 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M550.016 424.81L1204.84 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M467.68 424.81L1191.44 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M385.343 424.81L1178.03 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M303.007 424.81L1164.62 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M220.671 424.81L1151.22 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
                <path d="M138.334 424.81L1137.81 9.18988" stroke="white" strokeWidth="1.0391" strokeMiterlimit="10"></path>
            </svg>
            <div className="relative flex flex-col items-center justify-center px-8 py-12 mx-auto md:px-12 lg:px-16 xl:px-36 max-w-7xl lg:py-16">
                <div className="grid grid-cols-1 gap-6 lg lg:grid-cols-3 gap-y-12">
                    <div>
                        <div className="px-4">
                            <div className="flex items-center gap-3 text-white">
                                <div className="text-5xl">✺</div>
                                <p className="font-mono text-lg font-medium">STARTER PACK</p>
                            </div>
                            <p className="mt-6 text-sm font-light text-zinc-400">
                                This plan is ideal for individual users and hobbyists who are
                                looking for essential functionalities to support their projects.
                            </p>
                        </div>
                        <div className="p-8 mt-4 shadow-2xl shadow-black rounded-xl bg-zinc-900 backdrop-blur-xl border-white/5 ring-1 ring-white/10">
                            <ul className="flex flex-col text-sm text-zinc-400 gap-y-3" role="list">
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Limited number of users</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Limited storage (1 GB)</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Basic support (email only)</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Basic analytics</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Limited integrations</span>
                                </li>
                            </ul>
                            <p className="mt-6 font-mono font-bold tracking-tighter">
                                <span className="text-4xl text-white lg:text-6xl"> $5</span>
                                <span className="text-base font-medium text-zinc-500"> /mo</span>
                            </p>
                            <div className="flex mt-6 lg:mt-12">
                                <a className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10 w-full" href="#_" aria-describedby="tier-starter">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="px-4">
                            <div className="flex items-center gap-3 text-cyan-400">
                                <div className="text-5xl">❆</div>
                                <p className="font-mono text-lg font-medium">SILVER SURFER</p>
                            </div>
                            <p className="mt-6 text-sm font-light text-zinc-400">
                                If you're a small business or a startup, this plan is designed to
                                cater to your needs. It offers a balance of essential features.
                            </p>
                        </div>
                        <div className="p-8 mt-4 shadow-2xl shadow-black rounded-xl bg-zinc-800 backdrop-blur-xl border-white/5 ring-1 ring-white/10">
                            <ul className="flex flex-col text-sm text-zinc-400 gap-y-3" role="list">
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled text-cyan-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Limited number of users</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled text-cyan-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Limited storage (5 GB)</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled text-cyan-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Basic support (email only)</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled text-cyan-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Basic analytics</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled text-cyan-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Multiple integrations</span>
                                </li>
                            </ul>
                            <p className="mt-6 font-mono font-bold tracking-tighter">
                                <span className="text-4xl text-white lg:text-6xl"> $15</span>
                                <span className="text-base font-medium text-zinc-500"> /mo</span>
                            </p>
                            <div className="flex mt-6 lg:mt-12">
                                <a className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10 w-full" href="#_" aria-describedby="tier-starter">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="px-4">
                            <div className="flex items-center gap-3 text-white">
                                <div className="text-5xl">✿</div>
                                <p className="font-mono text-lg font-medium">GOLDEN UNICORN</p>
                            </div>
                            <p className="mt-6 text-sm font-light text-zinc-400">
                                Tailored for medium-sized businesses, this plan offers advanced
                                tools and features to support your growing demands.
                            </p>
                        </div>
                        <div className="p-8 mt-4 shadow-2xl shadow-black rounded-xl bg-zinc-900 backdrop-blur-xl border-white/5 ring-1 ring-white/10">
                            <ul className="flex flex-col text-sm text-zinc-400 gap-y-3" role="list">
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Unlimited number of users</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Unlimited storage</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Advanced support</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Advanced analytics</span>
                                </li>
                                <li className="flex flex-row items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path></svg><span>Multiple integrations</span>
                                </li>
                            </ul>
                            <p className="mt-6 font-mono font-bold tracking-tighter">
                                <span className="text-4xl text-white lg:text-6xl"> $35</span>
                                <span className="text-base font-medium text-zinc-500"> /mo</span>
                            </p>
                            <div className="flex mt-6 lg:mt-12">
                                <a className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10 w-full" href="#_" aria-describedby="tier-company">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default page
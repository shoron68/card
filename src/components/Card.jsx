import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";


const Card = () => {
    return (
        <div className="lg:flex lg:justify-center lg:mt-[100px]">

            <div className='lg:w-[1216px] w-full h-auto relative overflow-hidden  ' >
                <div className="h-[285px] w-[277px] border-[1px] border-[#ffffff1e]  rounded-[18px] bg-[#ffffff18] absolute lg:top-[26px]  lg:left-[75px] left-[-30px] rotate-12 "></div>

                <div className="   bg-gradient-to-br from-[#1D44E3] to-[#9D00FF] text-center lg:rounded-2xl">

                    <div className="py-[50px] lg:mx-0 mx-[20px]">
                        <div className="bg-gradient-to-r from-transparent via-[#ffffff46] to-transparent h-[1px] "></div>
                        <div className="flex justify-center pt-[50px]">
                            <div className="lg:w-[18%] ">
                                <div className="flex items-center  bg-opacity-20 text-[#ffffff] text-sm pl-4 pr-1 py-1 border-[1px] border-[#ffffff46] bg-[#ffffff2a] rounded-full">
                                    <span className="w-[10px] h-[10px] bg-blue-400 rounded-full mr-2"></span>
                                    Available for new projects
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="lg:text-[46px] text-[40px] font-bold mt-8 text-[#fff]">
                                Ready to Build Something Amazing?
                            </h1>
                        </div>

                        <div className="">
                            <p className="lg:text-[20px] text-[19px] text-[#ffffff] mt-[65px]">
                                I craft custom web solutions that drive real business results. Let's <span className="hidden lg:inline"> <br /> </span> collaborate on your next digital project and bring your vision to life.
                            </p>
                        </div>

                        <div className="mt-[58px] flex justify-center gap-4 ">
                            <button className="flex items-center gap-2 text-[#3F79DB] text-[20px] font-semibold pr-5 pl-8 py-4 rounded-lg border-[#fff] bg-[#fff] border-[1px] cursor-pointer ">
                                <FaRegFolder />
                                View Portfolio
                            </button>

                            <button className="flex items-center gap-2 text-[#fff] font-normal text-[20px] pr-5 pl-8 py-4 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a] cursor-pointer">
                                <FaEnvelope />
                                Let's Talk
                            </button>
                        </div>


                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-0 mt-[68px] lg:mx-[100px] relative z-10 ">
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='text-[24px] text-[#fff] font-bold'>5+</h3>
                                    <p className='text-[#ffffffcc]'>Years Experience</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='text-[24px] text-[#fff] font-bold'>50+</h3>
                                    <p className='text-[#ffffffcc]'>Projects Completed</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='text-[24px] text-[#fff] font-bold'>100%</h3>
                                    <p className='text-[#ffffffcc]'>Client Satisfaction</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='text-[24px] text-[#fff] font-bold'>24h</h3>
                                    <p className='text-[#ffffffcc]'>Support Response</p>
                                </div>
                            </div>
                            <div className="absolute bottom-[-44px]  right-[170px] -z-10 h-[200px] w-[700px] rounded-full bg-[radial-gradient(circle,_rgba(157,0,255,0.6)_10%,_rgba(157,0,255,0.3)_50%,_rgba(157,0,255,0)_40%)] filter blur-xl ">
                            </div>
                            


                        </div>

                        <div className="bg-gradient-to-r from-transparent via-[#ffffff46] to-transparent h-[1px] mt-[50px]"></div>
                    </div>

                </div>

                <div className="h-[310px] w-[274px] border-[1px] border-[#ffffff1e] bg-[#ffffff18] rounded-[18px]  bottom-[-45px] lg:right-[48px] right-[-25px]  absolute -rotate-9"></div>


                {/* <div className="absolute top-[20px]  right-[-600px]  h-[1000px] w-[1500px] rounded-full bg-[radial-gradient(circle,_rgba(157,0,255,0.6)_10%,_rgba(157,0,255,0.3)_50%,_rgba(157,0,255,0)_40%)] filter blur-xl ">
                </div> */}

            </div >
        </div>
    )
}

export default Card
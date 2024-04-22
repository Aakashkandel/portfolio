import React, { useEffect, useState } from 'react'
import cv from './assets/Aakash-Kandel-cv.pdf'

export default function Header() {
    const [btnstate,setBtnState]=useState(true)
     useEffect(() => {
        const hiddenDiv = document.getElementById('togglehidden');
        hiddenDiv.classList.remove('drop_up', 'xs:hidden');
        setBtnState(false);
    }, []);

    const toggleBtn = () => {
        if(btnstate===true)
        {
            // const hiddenDiv = document.getElementById('togglehidden');
            // hiddenDiv.classList.add('drop_up','xs:hidden');
            setBtnState(false);
    
        }
        if(btnstate==false)
        {
            // const hiddenDiv = document.getElementById('togglehidden');
            // hiddenDiv.classList.remove('drop_up','xs:hidden');
            setBtnState(true);

        }
     
        
    };


   
    
    return (
        <div class="overflow:hidden">
           

            <nav  class="   text-black font-semibold z-10 navhero fixed w-full">
            <div class="flex justify-between items-center lg:hidden navhero1 px-2">
                <div>
                    <li
                        class="mr-2 px-2 rounded-xl text-black   xs:text-sm md:text-base font-medium text-sm lg:hidden ">

                        <button class="flex  items-center justfy-center " href="" onClick={toggleBtn}>


                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </li>
                </div>
                <div>
                <a href={cv}
                        class="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-1 mx-5 px-2 rounded-lg xs:text-sm cv_button "
                        target="_blank">
                        View CV
                    </a>
                </div>



            </div>

                <ul class="flex justify-between items-center ">
                <div id="togglehidden" className={`justify-around  rounded-tr-full ${btnstate ? '' : 'drop-up hidden'} lg:w-3/12 lg:flex text-lg`}>
                        <li
                            class="mr-2 px-2 rounded-xl text-black scale-110 transition-transform duration-200 ease-in-out xs:text-sm md:text-base font-medium text-sm ">

                            <a class="flex h-full items-center " href="#home">


                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 576 512">
                                    <path
                                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                </svg>
                                <div class="m-3">
                                    Home
                                </div>
                            </a>
                        </li>
                        <li
                            class="mr-2 px-2 rounded-xl text-black xs:text-sm md:text-base  font-medium text-sm  ">

                            <a class="flex h-full items-center " href="#skill">


                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 576 512">
                                    <path
                                        d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                </svg>
                                <div class="m-3">
                                    Skill
                                </div>
                            </a>
                        </li>
                        <li
                            class="mr-2 px-2 rounded-xl text-black   xs:text-sm md:text-base font-medium text-sm ">

                            <a class="flex h-full items-center " href="#project">

                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
                                </svg>
                                <div class="m-3">
                                    Project
                                </div>
                            </a>
                        </li>


                        <li
                            class="mr-2 px-2 rounded-xl text-black  xs:text-sm md:text-base font-medium text-sm ">

                            <a class="flex h-full items-center " href="#education">


                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                                </svg>
                                <div class="m-3">
                                    Education
                                </div>
                            </a>
                        </li>



                        <li
                            class="mr-2 px-2 rounded-xl text-black   xs:text-sm md:text-base font-medium text-sm  ">

                            <a class="flex h-full items-center " href="#contact">


                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 576 512">
                                    <path
                                        d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
                                </svg>
                                <div class="m-3">
                                    Contact
                                </div>
                            </a>
                        </li>


                    </div>




                    <a href={cv}
                        class="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-1 mx-5 px-2 rounded-lg hidden lg:block xs:text-sm cv_button "
                        target="_blank">
                        View CV
                    </a>

                </ul>
            </nav>


        </div>
    )
}

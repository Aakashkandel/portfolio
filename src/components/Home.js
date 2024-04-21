import React from 'react'

import ProfileImage from './images/hero.png'
import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <>

            <div class="area" id="home">





                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>


                    <li></li>
                </ul>





                <div class="h-28">

                    <h2 class=" typing-animation  text-gray-200 pt-16  w-3/6 mx-auto  rounded-2xl font-bold text:sm  text-center  text-blue-950  lg:text-4xl">
                        <ReactTyped
                            strings={["Welcome To My Portfolio !"]}
                            typeSpeed={50}
                            backSpeed={1}
                            loop


                        />
                    </h2>

                </div>

                <div class="flex justify-between ml-10 h-5/6 xs:flex-col-reverse lg:flex-row ">
                    <div class="  text-center flex justify-center items-center m-auto  ">
                        <div class="mx-4 px-2">
                            <h3 class=" text-gray-200 text-3xl font-semibold  xs:text-xl lg:text-3xl">Hello, <span
                                class="text-purple-300 ">I'M</span></h3>
                            <h2 class=" text-yellow-400 text-4xl font-bold  xs:text-2xl lg:text-4xl mb-1">Aakash Kandel</h2>
                           
                        


                            <article>
                            <h1 class="text-gray-300 lg:mt-5 font-bold text-3xl my-1 text-orange-600 xs:text-xl lg:text-3xl "> Software Developer
                            </h1>
                            <p class="text-white font-semibold text-2xl xs:text-sm lg:text-2xl">I'm a creative designer and dedicated software
                                developer with a creative design flair.</p>
                            </article>

                            <div
                                class="text-yellow-200 text-xl  border-b-2 border-gray-300 m-auto mt-2 font-semibold xs:text-sm lg:text-2xl">
                                Social Media</div>
                            <div class="flex mt-3 justify-center my-3">
                                <div class="mx-2">
                                    <a class="" href="https://www.facebook.com/alvir15/"><ion-icon
                                        class="text-2xl  text-white xs:text-xl lg:text-4xl"
                                        name="logo-facebook"></ion-icon></a>
                                </div>
                                <div class="mx-4">
                                    <a class="text-5xl text-white xs:text-xl lg:text-4xl"
                                        href="https://github.com/Aakashkandel"><ion-icon name="logo-github"></ion-icon></a>
                                </div>
                                <div class="mx-4">
                                    <a class="text-5xl text-white xs:text-xl lg:text-4xl"
                                        href="https://www.linkedin.com/in/aakash-kandel-b97b1b2a1/"><ion-icon
                                            name="logo-linkedin"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class=" overflow-hidden rounded-tl-full rounded-bl-full bg-yellow-500 xs:rounded-full xs:m-auto border-4 border-gray-200 lg:rounded-bl-none lg:w-auto lg:h-full xs:w-8/12  lg:rounded-tr-none lg:rounded-br-none ">
                        <img class="m-auto lg:h-full lg:w-auto" src={ProfileImage} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

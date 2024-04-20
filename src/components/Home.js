import React from 'react'
import './css/Global.css'
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





                <div >

                   <h2 class=" typing-animation  text-gray-200 pt-16 p-1 w-2/6 m-auto rounded-2xl font-bold  text-center  text-blue-950 xs:text-xl lg:text-4xl">
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
                            <h4 class="text-gray-300 font-bold text-3xl mt-2 xs:text-xl lg:text-3xl ">A Software Developer
                                And Creative
                                Designer</h4>
                            <p class="text-white text-2xl xs:text-sm lg:text-2xl">I'm a creative designer and</p>
                            <p class="text-purple-200 text-2xl m-0 p-0 xs:text-sm lg:text-xl ">I am a passionate and
                                dedicated software
                                developer with a creative design flair. <br />My commitment to delivering professional
                                solutions
                                reflects in every project I undertake.</p>
                            <div
                                class="text-yellow-200 text-xl  border-b-2 border-gray-300 m-auto mt-5 font-semibold xs:text-sm lg:text-2xl">
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
                        class=" overflow-hidden rounded-tl-full rounded-bl-full xs:rounded-full xs:m-auto border-2 border-gray-500 lg:rounded-bl-none lg:w-auto lg:h-full xs:w-8/12  lg:rounded-tr-none lg:rounded-br-none ">
                        <img src={ProfileImage} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

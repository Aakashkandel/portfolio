import React from 'react'
import Image1 from './images/namuna.png';
import Image2 from './images/tribhuwan.png';
export default function Education() {
  return (
    <>

<section id="education">
        <h2 
        class="p-1  rounded-tr-full rounded-br-lg my-5  font-semibold text-sm text-2xl  text-gray-200 bg-gray-900 w-1/6  xs:w-2/6 xs:text-sm lg:text-2xl">
        Education</h2>
    </section>




    <div class="my-5" >
        <h2
            class="p-1  m-auto rounded-tl-full text-center rounded-tr-full mt-5  font-bold text-2xl  text-gray-800 bg-green-100  w-2/6 xs:text-xl lg:text-2xl">
            Education</h2>

        <div
            class=" grid grid-cols-2 gap-4 bg-green-100 p-5 text-center text-xl mx-5 rounded-2xl font-semibold  xs:grid-cols-1 lg:grid-cols-2">
            <div class=" px-5 border-gray-300 border-2 text-centertext-xl mx-5 rounded-2xl font-semibold">
                <div
                    class="bg-yellow-200 font-semibold p-1 w-6/12 m-auto rounded-bl-full rounded-br-full xs:text-sm lg:text-xl ">
                    Bachelor Education</div>
                <div class="flex  justify-center ">
                    <div>
                        <h2 class="p-1   font-bold text-2xl  text-blue-950 xs:text-xl lg:text-2xl  ">Lumbini ICT Campus
                        </h2>
                    </div>
                </div>
                <p class="xs:text-sm lg:text-xl ">Affiliated to Tribhuwan University</p>
                <div><img class="w-2/12 m-auto" src={Image2} alt=""/></div>
                <p class="xs:text-sm font-medium lg:text-xl font-semibold text-gray-700 mt-2 ">Pursing Bachelor of Computer Application (BCA)</p>
                <p class="xs:text-sm font-medium lg:text-xl font-semibold text-gray-700   ">Currently in the 5th Semester</p>




            </div>



            <div>
                <div class=" px-5 pb-5 border-gray-300 border-2 text-center text-xl mx-5 rounded-2xl font-semibold">
                    <div
                        class="bg-yellow-200 font-semibold p-1 w-8/12 m-auto rounded-bl-full rounded-br-full xs:text-sm lg:text-xl">
                        Higher Secondary School</div>

                    <h2 class="p-1   font-bold text-2xl  text-blue-950  m-auto xs:text-xl lg:text-2xl ">Namuna Science
                        and Management College</h2>
                    <div><img class="w-3/12 m-auto" src={Image1} alt=""/></div>
                    <p class="text-sm lg:text-xl text-gray-700 mt-8 ">Science Student</p>
                    <p class="text-sm lg:text-xl text-gray-700 ">Completed +2 Education</p>

                </div>
            </div>
        </div>
    </div>


    
    </>
  )
}

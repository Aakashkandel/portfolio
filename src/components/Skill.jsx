import React from 'react'
import MernImage from './images/mern.png';

export default function Skill() {
    return (
        <>
            <div class="bg-gray-900 " id="skill">
                <div class="bg-gray-200 rounded-br-full rounded-bl-full w-4/6 m-auto">
                    <div class="  w-2/6 m-auto rounded-2xl font-bold text-3xl text-center text-blue-950 xs:text-sm lg:text-2xl">
                        My Top Skills</div>
                </div>
                <section class="py-12 text-gray-100 sm:py-12 lg:py-16">

                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
                            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">Explore My Skillset</h2>
                            <p class="mb-4">"Experienced Web Developer with expertise in following Skills"</p>

                        </div>
                        <div
                            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                            <div class="relative">
                                <div class="absolute -inset-1">
                                    <div
                                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                    </div>
                                </div>
                                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                    <div class="p-9">

                                        <svg class="h-16 w-16 " viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                                            <path
                                                d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                                                fill="white" />
                                        </svg>
                                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">HTML</h3>
                                        <p class="mt-6 text-base text-gray-600">Hypertext Markup Language is the standard markup
                                            language for documents designed to be
                                            displayed in a web browser.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                                <div class="p-9"><svg class="h-15 w-16" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3"
                                    role="img" viewBox="0 0 512 512">
                                    <path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" />
                                    <path fill="#2965f1" d="M256 37V472l149-41 35-394" />
                                    <path fill="#ebebeb"
                                        d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382" />
                                    <path fill="#ffffff"
                                        d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z" />
                                </svg>
                                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">CSS</h3>
                                    <p class="mt-6 text-base text-gray-600">CSS (Cascading Style Sheets) is a coding language
                                        used to style the appearance of web pages,
                                        controlling layout, colors, fonts, and more.</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -inset-1">
                                    <div
                                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                    </div>
                                </div>
                                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                    <div class="p-9"><svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg"
                                        aria-label="JavaScript" role="img" viewBox="0 0 512 512">
                                        <rect width="512" height="512" rx="15%" fill="#f7df1e" />
                                        <path
                                            d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
                                    </svg>
                                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">JavaScript</h3>
                                        <p class="mt-6 text-base text-gray-600">
                                            JavaScript is a scripting language for web development, enabling dynamic content,
                                            interactivity,
                                            and behavior changes on websites.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                                <div class="p-9">

                                    <svg fill="#000000" class="w-16 h-16" viewBox="0 0 32 32" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>php</title>
                                        <path
                                            d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z">
                                        </path>
                                    </svg>
                                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">PHP</h3>
                                    <p class="mt-6 text-base text-gray-600">
                                        PHP is a widely-used server-side scripting language, popular for web development, known
                                        for its ease and versatility.</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -inset-1">
                                    <div
                                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                    </div>
                                </div>
                                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                    <div class="p-9"><svg fill="#000000" class="w-16 h-16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>laravel</title>
                                        <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path>
                                    </svg>
                                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Laravel
                                        </h3>
                                        <p class="mt-6 text-base text-gray-600">
                                            Laravel is a powerful PHP framework for web artisans, offering expressive syntax,
                                            robust features like routing, authentication, and ORM, simplifying complex tasks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                                <div class="p-9">
                                    <img class="h-16 w-auto" src={MernImage} alt="mern logo" />

                                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">MERN</h3>
                                    <p class="mt-6 text-base text-gray-600">MERN stack comprises MongoDB, Express.js, React, and
                                        Node.js, forming a full-stack JavaScript framework for building dynamic web
                                        applications.</p>
                                </div>
                            </div>







                            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                                <div class="p-9">

                                    <svg class="w-16 h-16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <title>file_type_tailwind</title>
                                        <path
                                            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                                        />
                                    </svg>
                                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Tailwind</h3>
                                    <p class="mt-6 text-base text-gray-600">
                                        Tailwind CSS is a utility-first CSS framework that speeds up web development by
                                        providing pre-designed classes for styling elements, making styling easier and faster.
                                    </p>
                                </div>
                            </div>







                            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                                <div class="p-9">


                                    <svg class="w-20 h-20" viewBox="-18.458 -22.75 191.151 191.151"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M-18.458 6.58h191.151v132.49H-18.458V6.58z" fill="none" />
                                        <path
                                            d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
                                            fill="#5d87a1" />
                                        <path
                                            d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
                                            fill="#f8981d" />
                                        <path
                                            d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
                                            fill="#5d87a1" />
                                        <path
                                            d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z"
                                            fill="#f8981d" />
                                    </svg>
                                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">MYSQL</h3>
                                    <p class="mt-6 text-base text-gray-600">

                                        MySQL is an open-source relational database management system that organizes data into
                                        tables, allowing users to store, retrieve, and manage information efficiently for
                                        various applications.</p>
                                </div>
                            </div>







                            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                                <div class="p-9">
                                    <svg class="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1254 7C6.67093 4.87867 9.17446 3.5 12 3.5C14.5988 3.5 16.9253 4.66631 18.4844 6.50407C17.0937 6.0314 15.5783 7.34714 16.0709 8.89995L16.7241 10.959L14.9571 15.3266L13.0674 10.6269L12.4133 9H13C13.5523 9 14 8.55229 14 8C14 7.44772 13.5523 7 13 7H10.9334H10C9.44772 7 9 7.44772 9 8C9 8.55229 9.44772 9 10 9H10.2576L11.0585 10.9917L9.19996 15.4174L6.50462 9H7C7.55228 9 8 8.55229 8 8C8 7.44772 7.55228 7 7 7H5.1254ZM4.18702 8.64675C3.74487 9.67557 3.5 10.8092 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 10.7811 20.2435 9.6222 19.7814 8.57423C19.7606 8.73082 19.72 8.88677 19.6586 9.03857L18.7133 11.375L15.8813 18.375C15.7283 18.7531 15.3611 19.0004 14.9532 19C14.5453 18.9996 14.1786 18.7515 14.0265 18.3731L12.1195 13.6306L10.122 18.3872C9.96611 18.7585 9.60272 19 9.20005 19C8.79737 19 8.43397 18.7585 8.27804 18.3872L4.18702 8.64675ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z" fill="#000000" />
                                    </svg>


                                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Wordpress</h3>
                                    <p class="mt-6 text-base text-gray-600">
                                        WordPress is a popular open-source content management system (CMS) used for building
                                        websites and blogs. It offers customization, flexibility, and a user-friendly interface.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





            </div>

            <div>
                <h2
                    class="p-1  rounded-tr-full rounded-br-lg my-5  font-bold text-2xl  text-gray-200 bg-gray-900 w-1/6  xs:w-2/6 xs:text-sm lg:text-2xl">
                    Technologies</h2>
                <div class="grid grid-cols-2 gap-5 m-5 xs:grid-cols-1 xs:gap-4 lg:grid-cols-2 ">
                    <div class=" bg-yellow-100 px-16 mx-5 shadow-lg shadow-slate-300 py-2 rounded-2xl text-center ">
                        <div class="text-2xl font-bold xs:text lg:text-2xl">Git</div>
                        <div class="text-6xl text-blue-600"><img class="w-20 m-auto p-1" src="image/git.png" alt="" /></div>
                        <p class="font-semibold xs:text-sm lg:text-xl">Proficient in version control using Git,ensuring
                            collaborative and organized development workflows.</p>
                    </div>
                    <div class=" bg-green-100 px-16 mx-5 shadow-lg shadow-slate-300 py-2 rounded-2xl text-center ">
                        <div class="text-2xl font-bold xs:text-xl  lg:text-2xl ">Responsive Design</div>
                        <div class="text-6xl text-blue-600"><img class="w-20 m-auto p-1" src="image/responsive.png" alt="" />
                        </div>
                        <p class="font-semibold lg:text-xl ">Skilled in creating websites that are responsive across various
                            devices and screen sizes.</p>

                    </div>

                </div>
            </div>



        </>
    )
}

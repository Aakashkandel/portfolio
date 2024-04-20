import React from 'react';

export default function Project() {
    return (
        <>
            <div id="project">
                <h2 className="p-1 m-auto rounded-tl-full text-center rounded-tr-full mt-5 font-bold text-2xl text-green-800 bg-blue-100 w-2/6 xs:text-xl lg:text-2xl">
                    Project
                </h2>
                <div className="bg-blue-100 p-5 text-center text-xl mx-5 rounded-2xl font-semibold">
                    <h2 className="p-1 font-bold text-2xl text-blue-950 m-auto xs:text-xl lg:text-2xl">
                        Second-Hand Goods Marketplace
                    </h2>
                    <p className="xs:text-sm lg:text-xl">
                        Developed a dynamic Second-Hand Goods Marketplace as my BCA third-semester project, employing a robust combination of HTML, CSS, PHP, and JavaScript. Integral part of BCA third-semester coursework, demonstrating practical application of web development principles during the final project defense.
                        Explore the codebase and project details on GitHub:
                    </p>
                    <div className="py-1 w-52 m-auto rounded-2xl bg-transparent skilldiv my-5">
                        <a className="text-3xl border-4 border-black bg-white px-3 rounded-2xl" href="https://github.com/Aakashkandel">
                            <ion-icon name="logo-github"></ion-icon> <span className="text-2xl font-semibold">GitHub Link</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from "react";


const Nav = () => {
    return (
        <div>

            <nav className="relative fixed w-full flex flex-row justify-between px-6 bg-gray-400 items-center">
                <div className="flex gap-5">
                    <div className="h4 font-bold text-blue-500">
                        JobHuntly
                    </div>
                    <div className="flex gap-3 cursor-pointer">
                        <div>find jobs</div>
                        <div>browse companies</div>

                    </div>
                </div>
                <div className="flex gap-2 ">

                    <button className="px-3 py-2 text-blue-500">
                        Login
                    </button>
                    <button className="px-3 py-2 bg-blue-500">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>

    )
}

export default Nav;
import { useState, useEffect } from "react";

const Navbar = (props) => {
    let [navBarCss, setnavBarCss] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY !== 0) {
                setnavBarCss("drop-shadow-sm");
            }else{
                setnavBarCss("");
            }
        });


    });

    return (
        <div
            className={
                "py-4 px-4 lg:px-20 xl:px-40 bg-white w-full fixed flex justify-between left-0 top-0 " +
                navBarCss
            }
        >
            <a href="#main">
                <img src="./logo.svg" alt="Logo" />
            </a>
            <ul className="flex font-medium text-lg text-gray-500 items-center">
                <li className="ml-4 cursor-pointer hover:text-primary">
                    <a href="#skills">Skills</a>
                </li>
                <li className="ml-4 cursor-pointer hover:text-primary">
                    <a href="#projects">Projects</a>
                </li>
                <li className="ml-4 cursor-pointer hover:text-primary">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

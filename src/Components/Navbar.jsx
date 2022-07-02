const Navbar = (props) => {
    return (
        <div className=" py-4 flex justify-between sticky">
            <a href="#main">
                <img src="./logo.svg" alt="Logo" />
            </a>
            <ul className="flex font-medium text-xl text-gray-500 items-center">
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

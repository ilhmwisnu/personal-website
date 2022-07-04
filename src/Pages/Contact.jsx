const Contact = () => {
    return (
        <div className="pt-24 pb-16" id="contact">
            <div className=" grid grid-cols-1 gap-x-14 lg:grid-cols-2">
                <div className="text-lg">
                    <h2 className="font-bold text-3xl mb-8">Contact Me</h2>
                    I always open for any discussion. <br />
                    You can reach me via
                    <br />
                    <br />
                    my <a
                        className="font-bold"
                        href="https://www.linkedin.com/in/ilhmwisnu/"
                    >
                        Linkedin
                    </a>{" "}
                    or
                    <br />
                    <br />
                    Email me at <br />
                    <strong>ilhamwisnu78@gmail.com</strong>
                </div>
                <div className=" ">
                    <img className="w-80 mx-auto" src="./avatar.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;

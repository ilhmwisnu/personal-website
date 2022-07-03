const Contact = () => {
    return (
        <div className="pt-24 pb-16" id="contact">
            <h2 className="font-bold text-3xl mb-8">Contact Me</h2>
            <div className=" grid grid-cols-1 gap-x-14 lg:grid-cols-2">
                <div className=" pb-12">
                    <p className="text-lg">asdas da  sadas da sd as jajsd as asd asdasdasdasd asdasdasd asdasdasda asdasdasd </p>
                    <img className="w-80 mx-auto" src="./avatar.png" alt="" />
                </div>
                <form
                    action="mailto:ilhamwisnu78@gmail.com"
                    method="post"
                    encType="multipart/form-data"
                >
                    <input
                        className="border p-3 rounded-md w-full mb-4"
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                    <br />
                    <input
                        className="border p-3 rounded-md w-full mb-4"
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    <br />
                    <textarea
                        className="border p-3 rounded-md w-full mb-4"
                        name="message"
                        placeholder="Message"
                        rows="5"
                    ></textarea>
                    <div className="flex justify-end">
                        <input
                            className="cursor-pointer px-6 py-3 border-primary rounded-lg border text-white bg-primary"
                            type="submit"
                            value="Send"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

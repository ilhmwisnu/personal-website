"use client";

import Lottie from "lottie-react";
import emailLottie from "@/app/email-animation.json";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="pt-24 pb-16" id="contact">
      <div className=" grid grid-cols-1 gap-x-14 sm:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Me an Email</h2>
          <p className="text-neutral-600">
            Have a project in mind or just want to say hello? Feel free to reach
            me out at
          </p>
          <form action="mailto:ilhamwisnu42@gmail.com">
            <button
              className="neo bg-primary mt-10 w-full sm:w-fit px-10 py-2"
              type="submit"
            >
              ilhamwisnu42@gmail.com
            </button>
          </form>
          {/* <div className="flex items-center w-full gap-3 text-gray-500">
            <hr className="border-t-1 w-full border my-8" />
            or
            <hr className="border-t-1 w-full border my-8" />
          </div> */}

          <p className="text-center sm:text-left mt-6  text-gray-500">
            or connect with me on social media
          </p>
          <div className="flex justify-center sm:justify-start gap-6 mt-4">
            <a href="https://www.linkedin.com/in/ilhmwisnu/">
              <Image height={40} width={40} src="/ic-linkedin.png" alt="linkedin" />
            </a>
            <a href="https://www.tiktok.com/@ilhmwisnu">
              <Image height={40} width={40} src="/ic-tiktok.png" alt="tiktok" />
            </a>
            <a href="https://twitter.com/WisnuDisini">
              <Image height={40} width={40} src="/ic-x.png" alt="x" />
            </a>
            <a href="https://www.instagram.com/ilhmwisnu/">
              <Image height={40} width={40} src="/ic-instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[250px]">
            <Lottie animationData={emailLottie} loop={true}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

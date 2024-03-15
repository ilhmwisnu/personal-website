import LinkButton from "@/components/LinkButton";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:py-24 justify-between ">
      <div className="mt-10 lg:w-3/5 text-center lg:text-left ">
        <p className="text-4xl mb-6">
          Hi! 👋, I&apos;m{" "}
          <span className="text-primary font-semibold">Wisnu</span> - an IT Guy
        </p>
        <p className="text-lg text-neutral-600">
          A passionate programmer based in Indonesia. With a love for all tech
          things, I specialize in mobile development and web development. My
          mission is to bring your ideas to life through creative
          problem-solving. Let&apos;s collaborate and build something amazing
          together!
        </p>
        <div className="flex mt-6 justify-center lg:justify-start">
          <LinkButton href="#projects" className="mr-4 bg-white">
            My Work
          </LinkButton>
          <LinkButton href="#contact">Let&apos;s Talk</LinkButton>
        </div>
      </div>
      <Image
        className="m-4 mt-8 lg:mt-0 max-w-sm mx-auto"
        width={366}
        height={422}
        src="/photo.png"
        alt="logo"
      />
      {/* <img className="mt-8 lg:mt-0 max-w-sm mx-auto" src="/avatar.png" alt="" /> */}
    </div>
  );
};

export default Header;

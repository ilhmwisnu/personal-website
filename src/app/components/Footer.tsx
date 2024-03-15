const Footer = () => {
  return (
    <div className="py-8 px-4 lg:px-20 xl:px-40 flex flex-col xl:flex-row justify-between text-stone-300 bg-neutral-950 ">
      <div className="text-center xl:text-left">
        <h4 className="">Ilham Wisnu P.W.</h4>
        <h5 className="">Web Developer & Mobile App Developer</h5>
      </div>
      <div className="text-center mt-6 xl:text-right xl:mt-0">
        Made with NextJS
        {/* <p className="">&copy; 2022 Ilham Wisnu P.W.</p> */}
      </div>
    </div>
  );
};

export default Footer;

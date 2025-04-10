import heroBg from "@/assets/images/hero-bg.jpeg";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 no-dark:text-white lg:text-6xl">
          Mbaise-di
        </h1>
        <p className="mt-6 text-gray-500 no-dark:text-gray-300">
          Strengthening Our Heritage, Empowering Our People
        </p>
        <div className="flex items-center justify-center gap-3 my-3">
          <a
            href="#who-are-we"
            className=" inline-block  rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto"
          >
            Learn More
          </a>
          {/* <p className="text-sm text-gray-400">Join our newsletter</p> */}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img
          className="aspect-[4/3] w-full rounded-xl object-cover lg:w-4/6"
          src={heroBg}
        />
      </div>
    </div>
  );
};

export default Hero;

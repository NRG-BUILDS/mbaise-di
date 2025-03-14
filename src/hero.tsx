import heroBg from "@/assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          Uniting Mbaise-di: Strengthening Our Heritage, Empowering Our People
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>
        <a
          href="#who-are-we"
          className=" inline-block mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto"
        >
          Learn More
        </a>
        <p className="mt-3 text-sm text-gray-400">Join our newsletter</p>
      </div>

      <div className="mt-10 flex justify-center">
        <img
          className="h-96 w-full rounded-xl object-cover lg:w-4/5"
          src={heroBg}
        />
      </div>
    </div>
  );
};

export default Hero;

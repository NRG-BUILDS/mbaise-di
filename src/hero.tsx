import heroBg from "@/assets/images/hero-bg.jpeg";
import { Logo } from "./components/logo";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-10 text-center">
      <div className="mx-auto max-w-lg">
        <Logo className="size-72 mx-auto" />

        <p className="mt-3 text-gray-500 no-dark:text-gray-300">
          An Association of Mbaise Sons and Daughters Aimed at Strengthening Our
          Heritage and Empowering Our People
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

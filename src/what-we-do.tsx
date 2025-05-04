import legalPic from "@/assets/images/whatWeDo/legal.jpg";
import adovacyPic from "@/assets/images/whatWeDo/advocacy.jpg";
import investmentPic from "@/assets/images/whatWeDo/investment.webp";
import employmentPic from "@/assets/images/whatWeDo/employment.jpg";
import healthcarePic from "@/assets/images/whatWeDo/healthcare.jpg";
import securityPic from "@/assets/images/whatWeDo/security.jpg";
import educationPic from "@/assets/images/whatWeDo/schooling.jpg";
export const whatWeDo = [
  {
    title: "Advocacy",
    content: "Championing the cause of the common man.",
    image: adovacyPic,
  },
  {
    title: "Legal Counsel",
    content:
      "Offering free legal services on a first step consultation , with a view to diffuse and ensure conflict resolutions in our communities.",
    image: legalPic,
  },
  {
    title: "Investments",
    content: "Investments in financial and productin services.",
    image: investmentPic,
  },
  {
    title: "Employment",
    content:
      "Creating jobs and employment for our vast array of unskilled, skilled and educated workforce.",
    image: employmentPic,
  },
  {
    title: "Education",
    content:
      "Championing the unassailable right to education of every Mbaise child.",
    image: educationPic,
  },
  {
    title: "Healthcare",
    content: "Promoting a healthy and joyous society",
    image: healthcarePic,
  },
  {
    title: "Security",
    content: "The protection and safety we all need.",
    image: securityPic,
  },
  // {
  //   title: "Advertising",
  //   content:
  //     "Opportunities for creating awareness about economic and social activities that add value to our people.",
  //   image: advertisingtPic,
  // },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white no-dark:bg-gray-900" id="mandates">
      <div className="h-[24rem] bg-gray-100 no-dark:bg-gray-800"></div>
      <div className="container mx-auto -mt-72 px-6 py-10 sm:-mt-80 md:-mt-96">
        <h1 className="z-40 text-center text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
          Our Mandates
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {whatWeDo.map((e) => (
            <div className="flex flex-col items-start rounded-xl border p-4 no-dark:border-gray-700 sm:p-6 bg-white">
              <img
                className="aspect-square w-full rounded-xl object-cover"
                src={e.image}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 no-dark:text-white">
                {e.title}
              </h1>

              <p className="mt-2 capitalize text-gray-500 no-dark:text-gray-300">
                {e.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

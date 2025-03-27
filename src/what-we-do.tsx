import legalPic from "@/assets/images/whatWeDo/legal.jpg";
import adovacyPic from "@/assets/images/whatWeDo/advocacy.jpg";
import investmentPic from "@/assets/images/whatWeDo/investment.webp";
import employmentPic from "@/assets/images/whatWeDo/employment.jpg";
import healthcarePic from "@/assets/images/whatWeDo/healthcare.jpg";
import securityPic from "@/assets/images/whatWeDo/security.jpg";
import educationPic from "@/assets/images/whatWeDo/schooling.jpg";

const WhatWeDo = () => {
  const whatWeDo = [
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

  return (
    <section className="bg-white no-dark:bg-gray-900">
      <div className="h-[32rem] bg-gray-100 no-dark:bg-gray-800">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
            Our Mandate
          </h1>

          <div className="mx-auto mt-6 flex justify-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
            <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
            <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 no-dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
      </div>

      <div className="container mx-auto -mt-72 px-6 py-10 sm:-mt-80 md:-mt-96">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {whatWeDo.map((e) => (
            <div className="flex flex-col items-start rounded-xl border p-4 no-dark:border-gray-700 sm:p-6">
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

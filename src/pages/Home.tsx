import Goals from "../goals";
import Hero from "../hero";
import History from "../history";
import Nav from "../nav";
import WhatWeDo from "../what-we-do";
import WhoWeAre from "../who-are-we";
import { adverts } from "../ads";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <main>
      <section className="bg-white no-dark:bg-gray-900">
        <Nav />
        <Hero />
      </section>
      <WhoWeAre />
      <History />
      <Goals />

      <WhatWeDo />

      {/* AD BLOCK */}
      <section className="bg-white no-dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
              Socioeconomic Services
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              Putting out information here on vacancies in our spheres of
              influence , job openings.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {adverts.map((ad) => (
              <div>
                <div className="relative">
                  <img
                    className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                    src={ad.image}
                    alt=""
                  />
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 no-dark:text-white">
                  {ad.title}
                </h1>

                <hr className="my-6 w-32 text-blue-500" />

                <p className="text-sm text-gray-500 no-dark:text-gray-400">
                  {ad.content}
                </p>

                <a
                  href={ad.link}
                  className="mt-4 inline-block text-blue-500 underline hover:text-blue-400"
                >
                  {ad.action}
                </a>
              </div>
            ))}

            <a
              href={"https://wa.me/+2349079711780"}
              className="block md:col-span-2 xl:col-span-3"
            >
              <div className="relative">
                <div className="h-64 w-full rounded-lg border-dashed border-2 border-neutral-500 hover:border-purple-500 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-neutral-500 mx-auto hover:text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p>Advertise your business with Us</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 no-dark:text-white">
                Spotlight your brand here!
              </h1>

              <hr className="my-6 w-32 text-blue-500" />

              <p className="text-sm text-gray-500 no-dark:text-gray-400">
                Chat with us now to place your advertisement and reach a wider
                audience.
              </p>

              <p className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">
                Chat with us on WhatsApp
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {/* <section className="bg-white no-dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl px-6 py-10">
          <h1 className="text-center text-4xl font-semibold text-gray-800 no-dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            <div className="rounded-lg border-2 border-gray-100 no-dark:border-gray-700">
              <button className="flex w-full items-center justify-between p-8">
                <h1 className="font-semibold text-gray-700 no-dark:text-white">
                  How i can play for my appoinment ?
                </h1>

                <span className="rounded-full bg-gray-200 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </button>

              <hr className="border-gray-200 no-dark:border-gray-700" />

              <p className="p-8 text-sm text-gray-500 no-dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-100 no-dark:border-gray-700">
              <button className="flex w-full items-center justify-between p-8">
                <h1 className="font-semibold text-gray-700 no-dark:text-white">
                  Is the cost of the appoinment covered by private health
                  insurance?
                </h1>

                <span className="rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="rounded-lg border-2 border-gray-100 no-dark:border-gray-700">
              <button className="flex w-full items-center justify-between p-8">
                <h1 className="font-semibold text-gray-700 no-dark:text-white">
                  Do i need a referral?
                </h1>

                <span className="rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="rounded-lg border-2 border-gray-100 no-dark:border-gray-700">
              <button className="flex w-full items-center justify-between p-8">
                <h1 className="font-semibold text-gray-700 no-dark:text-white">
                  What are your opening house?
                </h1>

                <span className="rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="rounded-lg border-2 border-gray-100 no-dark:border-gray-700">
              <button className="flex w-full items-center justify-between p-8">
                <h1 className="font-semibold text-gray-700 no-dark:text-white">
                  What can i expect at my first consultation?
                </h1>

                <span className="rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Home;

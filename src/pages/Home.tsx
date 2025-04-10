import Goals from "../goals";
import Hero from "../hero";
import History from "../history";
import Nav from "../nav";
import WhatWeDo from "../what-we-do";
import WhoWeAre from "../who-are-we";
import { adverts } from "../ads";

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

      <section
        id="contact"
        className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 no-dark:from-gray-700 no-dark:via-gray-800 no-dark:to-gray-900"
      >
        <div className="container mx-auto flex min-h-screen flex-col px-6 py-12">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="text-white lg:mx-6 lg:w-1/2">
              <h1 className="text-3xl font-semibold capitalize lg:text-5xl">
                Get in touch
              </h1>

              <p className="mt-6 max-w-xl">
                Ask us everything and we would love to hear from you
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-white">
                    {" "}
                    Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522{" "}
                  </span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-white">
                    (257) 563-7401
                  </span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-white">
                    acb@example.com
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300">Follow us</h3>

                <div className="-mx-1.5 mt-4 flex">
                  <a
                    className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="h-10 w-10 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl no-dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-2xl font-medium text-gray-700 no-dark:text-gray-200">
                  Contact form
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="mb-2 block text-sm text-gray-600 no-dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 no-dark:border-gray-600 no-dark:bg-gray-900 no-dark:text-gray-300 no-dark:focus:border-blue-300"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <label className="mb-2 block text-sm text-gray-600 no-dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 no-dark:border-gray-600 no-dark:bg-gray-900 no-dark:text-gray-300 no-dark:focus:border-blue-300"
                    />
                  </div>

                  <div className="mt-6 w-full">
                    <label className="mb-2 block text-sm text-gray-600 no-dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 no-dark:border-gray-600 no-dark:bg-gray-900 no-dark:text-gray-300 no-dark:focus:border-blue-300 md:h-48"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white no-dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="md:-mx-3 md:flex md:items-center md:justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-800 no-dark:text-white md:mx-3 xl:text-4xl">
              Subscribe our newsletter to get update.
            </h1>
          </div>

          <hr className="my-6 border-gray-200 no-dark:border-gray-700 md:my-10" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-800 no-dark:text-white">
                Quick Link
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 no-dark:text-white">
                Industries
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 no-dark:text-white">
                Services
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 no-dark:text-white">
                Contact Us
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  +880 768 473 4978
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  info@merakiui.com
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 no-dark:border-gray-700 md:my-10" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 no-dark:text-white no-dark:hover:text-gray-300"
            >
              Mbaise-di
            </a>

            <p className="mt-4 text-sm text-gray-500 no-dark:text-gray-300 sm:mt-0">
              © Copyright 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;

import { Logo } from "./logo";
import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { whatWeDo } from "@/what-we-do";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Footer = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(name, email, message);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    emailjs
      .sendForm(
        "service_4ffqnr8",
        "template_4hrjx7s",
        // @ts-ignore
        e.target,
        "zzUzKEDYSYNA9UlWW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setIsSuccess(true);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
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
                    18, Sir Samuel Manuwa Street, Victoria Island, Lagos{" "}
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
                    +234 803 638 2343
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
                    mbaisedi.web@gmail.com
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl no-dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-2xl font-medium text-gray-700 no-dark:text-gray-200">
                  Contact form
                </h1>

                <form
                  name="sentMessage"
                  onSubmit={handleSubmit}
                  className="mt-6"
                >
                  <div className="flex-1">
                    <label className="mb-2 block text-sm text-gray-600 no-dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      required
                      onChange={handleChange}
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 no-dark:border-gray-600 no-dark:bg-gray-900 no-dark:text-gray-300 no-dark:focus:border-red-300"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <label className="mb-2 block text-sm text-gray-600 no-dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      required
                      onChange={handleChange}
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 no-dark:border-gray-600 no-dark:bg-gray-900 no-dark:text-gray-300 no-dark:focus:border-red-300"
                    />
                  </div>

                  <div className="mt-6 w-full">
                    <label className="mb-2 block text-sm text-gray-600 no-dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      required
                      onChange={handleChange}
                      name="message"
                      className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 no-dark:border-gray-600 no-dark:bg-gray-900 no-dark:text-gray-300 no-dark:focus:border-red-300 md:h-48"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || isSuccess}
                    className="mt-6 disabled:opacity-50 w-full transform rounded-md bg-red-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                  >
                    {isSuccess
                      ? "SENT!"
                      : loading
                      ? "Sending message"
                      : "get in touch"}
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
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Home
                </a>
                <a
                  href="#who-we-are"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Who We Are
                </a>
                <a
                  href="#mandates"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Our Mandates
                </a>
                <a
                  href="/news"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  Mbaisedi News
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 no-dark:text-white">
                Services
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                {whatWeDo.map((e) => (
                  <p className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400">
                    {e.title}
                  </p>
                ))}
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
                  +234 803 638 2343
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline no-dark:text-gray-300 no-dark:hover:text-blue-400"
                >
                  mbaisedi.web@gmail.com
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
              <Logo className="size-20" />
            </a>

            <p className="mt-4 text-sm text-gray-500 no-dark:text-gray-300 sm:mt-0">
              © Copyright 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

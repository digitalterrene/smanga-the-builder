import React from "react";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
export default function ContactPage() {
  return (
    <div>
      <div className="max-w-[85rem] px-4 mt-20 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact Me
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              I'd love to talk about how i can help you.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col  p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Fill in the form
              </h2>

              <form>
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="hs-full-name-contacts-1"
                      className="sr-only"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="hs-full-name-contacts-1"
                      id="hs-full-name-contacts-1"
                      autoComplete="full-name"
                      className="py-3 px-4 block w-full border-gray-200 border text-sm   focus:outline-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 border text-sm   focus:outline-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder=" Email Address"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hs-phone-number-contacts-1"
                      className="sr-only"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="hs-phone-number-contacts-1"
                      id="hs-phone-number-contacts-1"
                      autoComplete="phone-number"
                      className="py-3 px-4 block w-full border-gray-200 border text-sm   focus:outline-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows={4}
                      className="py-3 px-4 block w-full border-gray-200 bordertext-sm focus:outline-yellow-500 border disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold   border border-transparent bg-yellow-500 hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Send inquiry
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    I'll get back to you as soon as i can.
                  </p>
                </div>
              </form>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              <div className="flex gap-x-7 py-6">
                <div className="p-2 h-10 items-center flex justify-center w-10 bg-yellow-500 text-white">
                  <FaPhone />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Phone Number
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">078 456 4566</p>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <div className="p-2 h-10 items-center flex justify-center w-10 bg-yellow-500 text-white">
                  <MdEmail />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Email Address
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">smanga@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-x-7 py-6">
                <div className="p-2 h-10 items-center flex justify-center w-10 bg-yellow-500 text-white">
                  <FaFacebook />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Facebook
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Simanga Dube</p>
                </div>
              </div>
              <div className="flex gap-x-7 py-6">
                <div className="p-2 h-10 items-center flex justify-center w-10 bg-yellow-500 text-white">
                  <AiFillInstagram />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Instagram
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Simanga Dube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

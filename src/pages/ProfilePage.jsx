import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  async function getUser() {
    const response = await axios.get("http://localhost:8080/Users/1");
    const data = response.data;
    setUserData(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <article>
        {/* Profile header */}
        <div>
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src="https://media.licdn.com/dms/image/v2/C4E1BAQHtB6dgXPWATw/company-background_10000/company-background_10000/0/1584365611080/cwi_ksa_cover?e=2147483647&v=beta&t=cwS5SsKVyjqY9lGWpQKARXhLFd4TuITw32uU2jpFdhk"
              alt=""
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src="https://uploads.commoninja.com/searchengine/wordpress/user-avatar-reloaded.png"
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {userData?.name}
                  </h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Message</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      x-description="Heroicon name: solid/phone"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {userData?.name}
              </h1>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-6 sm:mt-2 2xl:mt-5">
          <div className="border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a
                  href="#"
                  className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                //   x-state-description='undefined: "border-pink-500 text-gray-900", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"'
                >
                  Calendar
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                //   x-state-description='undefined: "border-pink-500 text-gray-900", undefined: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"'
                >
                  Recognition
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Description list */}
        <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900">{userData?.mobile}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">user Id</dt>
              <dd className="mt-1 text-sm text-gray-900">{userData?.userId}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  class="size-6">
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clip-rule="evenodd" />
                </svg>

                <div className="size-4 relative bottom-10 left-[1.05rem] bg-black flex rounded-full items-center justify-center text-white">
                  {userData?.cartItem?.length}
                </div>
              </dt>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="red"
                  class="size-6">
                  <path 
                  d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>

                <div className="size-4 relative bottom-10 left-[1.05rem] bg-red-400 flex rounded-full items-center justify-center text-black">
                  {userData?.wishlist?.length}
                </div>
              </dt>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {userData?.address}
              </dd>
            </div>
            {/* <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Sits</dt>
              <dd className="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
            </div> */}
            {/* <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="mt-1 text-sm text-gray-900">$145,000</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Birthday</dt>
              <dd className="mt-1 text-sm text-gray-900">June 8, 1990</dd>
            </div> */}
            {/* <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                <p>
                  Tincidunt quam neque in cursus viverra orci, dapibus nec
                  tristique. Nullam ut sit dolor consectetur urna, dui cras nec
                  sed. Cursus risus congue arcu aenean posuere aliquam.
                </p>
                <p>
                  Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
                  rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
                  senectus vitae. Scelerisque fermentum, cursus felis dui
                  suspendisse velit pharetra. Augue et duis cursus maecenas eget
                  quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
                  dictum risus suspendisse.
                </p>
              </dd>
            </div> */}
          </dl>
        </div>
        {/* Team member list */}
        <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-gray-500">User Cart Items</h2>
          <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {userData?.cartItem?.map((item) => (<div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item?.thumbnail}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {item?.product}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {item?.category}<br />
                    ${item?.finalprice}
                  </p>
                </a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProfilePage;
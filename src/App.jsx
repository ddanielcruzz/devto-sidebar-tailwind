import React, { useState } from "react";
import { ReactComponent as HamburgerIcon } from "./svg/hamburger.svg";
import { ReactComponent as SearchIcon } from "./svg/search.svg";
import { ReactComponent as XMArkIcon } from "./svg/x-mark.svg";
import { ReactComponent as BellIcon } from "./svg/bell.svg";

const MobileSidebar = ({ closeSidebar }) => {
  return (
    <section className="bg-black bg-opacity-40 h-screen w-screen fixed top-0 left-0">
      <section className="bg-white max-w-[65%] p-4 h-full">
        <section className="flex justify-between">
          <h1 className="font-bold text-lg mb-4">Dev Community</h1>
          <button onClick={() => closeSidebar()}>
            <XMArkIcon />
          </button>
        </section>
        <ul>
          <li>Home</li>
          <li>Reading List</li>
          <li>Listings</li>
          <li>Podcasts</li>
          <li>Videos</li>
        </ul>
      </section>
    </section>
  );
};

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <nav className="border-b border-gray-300l">
      {isMobileSidebarOpen && <MobileSidebar closeSidebar={closeSidebar} />}
      <section className="max-w-[90%] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl	mx-auto flex justify-between py-2">
        <section className="flex space-x-4">
          <button
            className="block md:hidden"
            onClick={() => {
              setIsMobileSidebarOpen(true);
            }}
          >
            <HamburgerIcon />
          </button>
          <img
            className="w-[50px] h-10"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Dev.to Logo"
          />
          <div className="hidden md:flex border border-gray-300 h-auto p-2 rounded-md w-[420px] justify-between focus-within:outline-1 focus-within:outline outline-blue-500">
            <input
              className="flex-grow focus:outline-0"
              type="text"
              placeholder="Search..."
            />
            <button>
              <SearchIcon className="fill-current" />
            </button>
          </div>
        </section>
        <section className="flex space-x-3">
          <button className="block md:hidden">
            <SearchIcon />
          </button>
          <button className="hidden md:block border border-blue-700 text-blue-700 rounded-md px-3 py-2">
            Create Post
          </button>
          <button>
            <BellIcon />
          </button>
          <button>
            <img
              className="h-8 w-8 rounded-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
              alt="User avatar"
            />
          </button>
        </section>
      </section>
    </nav>
  );
}

export default App;

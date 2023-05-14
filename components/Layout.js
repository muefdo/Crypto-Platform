import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Layout = ({ children, title = "Crypto Tracker" }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Crypto Hype</title>
        <meta name="description" content="New era crypto platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-center justify-between h-full text-slate-100 overflow-hidden">
        <div className="rounded bg-slate-700 flex items-center justify-between h-20 font-bold over">
          <Link href="/" passHref legacyBehavior>
            <a className="pl-11">Main Page</a>
          </Link>

          <Link href="/currency/currencyPage" passHref legacyBehavior>
            <a className="hidden md:block text-slate-100">
              Currency Calculator
            </a>
          </Link>
          <div className="hidden md:block pr-7">
            <Link href="/signIn" passHref legacyBehavior>
              <a className="p-4 hover:text-slate-500 ">sign in</a>
            </Link>
            <Link href="/signUp" passHref legacyBehavior>
              <a className="bg-blue-400 rounded-2xl shadow-2xl hover:shadow-2xl ml-2 py-2 px-4">
                sign up
              </a>
            </Link>
          </div>
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer z-10 mr-4 duration-300"
          >
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={20} />}
          </div>

          {/*mobile menu */}
          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-20 flex flex-col justify-between w-full h-[90%] bg-slate-800 ease-in duration-300 z-10 overflow-hidden"
                : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300 overflow-hidden "
            }
          >
            <ul>
              <li className="border-b py-6 flex px-4">
                <Link href="/"> home</Link>
              </li>
              <li className="border-b py-6 flex px-4">
                <Link href="/account"> account page</Link>
              </li>
              <li className="border-b py-6 flex px-4">
                <Link href="/currency/currencyPage" passHref legacyBehavior>
                  <a className="">Currency Calculator</a>
                </Link>
              </li>
            </ul>
            <div className="flex flex-col mb-10">
              <ul>
                <li>
                  <Link href="/signIn">
                    {" "}
                    <button className="w-full my-2 p-3 bg-blue-500  border border-white-500 rounded-2xl shadow-xl">
                      sign in
                    </button>{" "}
                  </Link>
                </li>

                <li>
                  <Link href="/signUp">
                    <button className="w-full p-3  border border-white-500 rounded-2xl shadow-xl">
                      sign up
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="h-screen mb-20 text-white">{children}</main>
      <footer className="text-slate-100  bg-slate-600 bottom-0">
        <div className="grid md:grid-cols-2">
          <div className="flex p-2 justify-evenly">
            <div className="pl-3">
              <h1 className="text-l font-bold">Info</h1>
              <ul>
                <li className="text-xs md:text-sm py-1">About us</li>
                <li className="text-xs md:text-sm py-1">Currency Page</li>
                <li className="text-xs md:text-sm py-1">privacy policy</li>
              </ul>
            </div>
            <div>
              <h1 className="text-l font-bold">Support</h1>
              <ul>
                <li className="text-xs md:text-sm py-1">About us</li>
                <li className="text-xs md:text-sm py-1">Currency Page</li>
                <li className="text-xs md:text-sm py-1">privacy policy</li>
              </ul>
            </div>
            <div>
              <h1 className="text-l font-bold">Support</h1>
              <ul>
                <li className="text-xs md:text-sm py-1">About us</li>
                <li className="text-xs md:text-sm py-1">Currency Page</li>
                <li className="text-xs md:text-sm py-1">privacy policy</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block justify-end items-end grid-cols-1">
              <h1 className="text-l font-bold">Support</h1>
              <ul>
                <li className="text-xs md:text-sm py-1">About us</li>
                <li className="text-xs md:text-sm py-1">Currency Page</li>
                <li className="text-xs md:text-sm py-1">privacy policy</li>
              </ul>
            </div>
        </div>

        <div className="justify-center flex bg-zinc-800 p-4">
          <a href="https://bradi.tech/">
            {" "}
            Powered By CoinGecko API -Developed by{" "}
            <span className="text-orange-600">Bradi.tech</span>{" "}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

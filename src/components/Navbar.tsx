"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={
                  pathname === "/projects"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={
                  pathname === "/blog"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className={
                  pathname === "/dashboard"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/messages"
                className={
                  pathname === "/dashboard/messages"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Messages
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/blogs"
                className={
                  pathname === "/dashboard/blogs"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Blog Management
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/projects"
                className={
                  pathname === "/dashboard/projects"
                    ? "text-blue-500 underline"
                    : "text-black cursor-pointer hover:underline"
                }
              >
                Projects management
              </Link>
            </li>
            <div className="flex items-center">
              {session?.user ? (
                <div>
                  <button
                    className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200"
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                  <small> Welcome: {session?.user?.name}</small>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
                >
                  Login
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

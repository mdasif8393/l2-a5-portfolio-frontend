"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">Login Here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"></div>
      <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
            onClick={() =>
              signIn("google", {
                callbackUrl:
                  "https://a5-portfolio-frontend.vercel.app/dashboard",
              })
            }
          >
            <Image
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              width={30}
              height={30}
              alt="Google logo"
            />
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
            onClick={() =>
              signIn("github", {
                callbackUrl:
                  "https://a5-portfolio-frontend.vercel.app/dashboard",
              })
            }
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width={25}
              height={25}
              alt="GitHub logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

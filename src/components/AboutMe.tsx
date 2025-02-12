"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import asifImage from "../app/assets/asif.jpg";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Myself Asif Zaman
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Web Developer",
                500, // wait 1s before replacing "Mice" with "Hamsters"
                "Experienced MERN Developer",
                500,
                "Skilled on MongoDB & My SQl",
                500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <div className="flex mx-auto">
              <Link href="https://github.com/mdasif8393">
                <FaGithub className="w-8 h-8 mx-2" />
              </Link>{" "}
              <Link href="https://www.linkedin.com/in/md-asif-zaman/">
                <FaLinkedin className="w-8 h-8" />
              </Link>
            </div>
            <br />
            <Link
              href="https://drive.google.com/file/d/1XTx4sviO0OSMkHlUimZZSo0epdPfuxjC/view?usp=sharing"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Download Resume
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={asifImage} height={500} width={500} alt="asif" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

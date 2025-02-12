import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const HomeProjects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-3">Projects</h1>
      <Carousel className="h-screen">
        <CarouselContent>
          <CarouselItem>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://i.ibb.co.com/9x2cfCX/s1.png"
                  alt="Background Image"
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">
                  Search Book
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  You can search your book and add to cart your book
                </p>
                <Link
                  href="/projects"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  See All Projects
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://i.ibb.co.com/v65wGCWW/s2.png"
                  alt="Background Image"
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">
                  E Commerce
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  You can add to cart, search, buy products
                </p>
                <Link
                  href="/projects"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  See All Projects
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://i.ibb.co.com/zHsWhJZg/s3.png"
                  alt="Background Image"
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">
                  BUy Products
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  You can add to cart, search, buy products
                </p>
                <Link
                  href="/projects"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  See All Projects
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeProjects;

// import profileImage from "../assets/img/M.H.Nahib.JPG";
import {
  GithubIcon,
  TwitterIcon,
  FacebookIcon,
  HashnodeIcon,
} from "./icon.component";

export const Hero = () => {
  return (
    <div className="w-full my-8 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <img
            src="/assets/img/M. H. Nahib.JPG"
            alt="M. H. Nahib (Software Engineer)"
            className="h-56 w-56 lg:h-96 lg:w-96 rounded-full object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-center space-y-4 lg:text-left">
          <div className="space-y-4 font-semibold">
            <p className="text-lg">Hello world,</p>
            <h1 className="font-bold text-black text-3xl sm:text-4xl lg:text-5xl">
              I'm M. H. Nahib
            </h1>
            <h2 className="text-gray-500 font-bold text-xl sm:text-2xl">
              I'm a{" "}
              <span className="bg-gray-200 text-black font-bold px-1 py-0.5 sm:py-0.2 rounded hover:bg-green-300 transition duration-300 ease-in-out">
                software engineer
              </span>{" "}
              based in{" "}
              <span className="bg-gray-200 text-black font-bold px-1 py-0.5 sm:py-0.2 rounded hover:bg-green-300 transition duration-300 ease-in-out">
                Bangladesh
              </span>
              .
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              I love to{" "}
              <span className="bg-gray-200 text-black font-bold px-1 py-0.5 rounded hover:bg-green-300 transition duration-300 ease-in-out">
                build things
              </span>{" "}
              and passionate about{" "}
              <span className="bg-gray-200 text-black font-bold px-1 py-0.5  sm:py-0.2 rounded hover:bg-green-300 transition duration-300 ease-in-out">
                learning new technologies
              </span>
              .
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Let's connect and{" "}
              <span className="bg-gray-200 text-black font-bold px-1 py-0.5 rounded hover:bg-green-300 transition duration-300 ease-in-out">
                build something amazing together
              </span>
              .
            </p>

            <p className="font-bold text-black text-base sm:text-lg">
              Phone <a href="tel:+1234567890">+8801738376950</a>
            </p>
            <p className="font-bold text-black text-base sm:text-lg">
              Email{" "}
              <a href="mailto:m.h.nahib@example.com">m.h.nahib@example.com</a>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start space-x-4 items-center text-base sm:text-lg font-bold">
              <p>Social </p>
              <a
                href="https://facebook.com/mhnahib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com/mhnahib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://hashnode.com/@mhnahib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HashnodeIcon />
              </a>
              <a
                href="https://github.com/MHNahib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { DownloadIcon } from "./icon.component";

export const FloatingDownload = () => {
  return (
    // <div className="fixed bottom-9 right-4 z-50 bg-green-300 rounded-full shadow-lg py-3 px-6 hover:shadow-xl hover:border-2 hover:border-black transition-all duration-300 ease-in-out">
    //   <a
    //     href="/files/Resume.pdf"
    //     download
    //     className="flex items-center justify-center text-gray-700"
    //   >
    //     <div className="flex justify-center items-center ">
    //       <DownloadIcon className="w-8 h-8" />
    //       {/* <span className="ml-2 text-sm font-bold hidden sm:inline">
    //         Preview CV
    //       </span> */}
    //     </div>
    //   </a>
    // </div>
    <div className="fixed bottom-9 right-4 z-50">
      <div className="w-16 h-16 sm:hover:w-40 bg-green-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-2 hover:border-black transition-all duration-300 ease-in-out cursor-pointer group">
        <a
          href="/files/Resume.pdf"
          download
          className="text-gray-700 w-full h-full flex items-center justify-center"
        >
          <div className="flex justify-center items-center">
            <DownloadIcon className="w-8 h-8" />
            <div className="ml-2 text-sm font-bold hidden group-hover:block text-black  transition-all duration-300 ease-in-out">
              Preview CV
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

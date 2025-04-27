import { DownloadIcon } from "./icon.component";

export const FloatingDownload = () => {
  return (
    <div className="fixed bottom-9 right-4 z-50 bg-green-300 rounded-full shadow-lg p-3 hover:shadow-xl hover:border-2 hover:border-black transition-all duration-300 ease-in-out">
      <a
        href="/files/Resume.pdf"
        download
        className="flex items-center justify-center text-gray-700"
      >
        <div className="flex justify-center items-center px-4 sm:px-0">
          <DownloadIcon className="w-8 h-8" />
          <span className="ml-2 text-sm font-bold hidden sm:inline">
            Preview CV
          </span>
        </div>
      </a>
    </div>
  );
};

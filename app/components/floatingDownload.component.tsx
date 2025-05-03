import { DownloadIcon } from "./icon.component";

const cvURL =
  "https://drive.google.com/file/d/17fRji5gNNY4hNaNVx5CZaw7VfV_7-huA/view?usp=sharing";

export const FloatingDownload = () => {
  return (
    <div className="fixed bottom-9 right-4 z-50">
      <div className="w-16 h-16 sm:hover:w-40 bg-green-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-2 hover:border-black transition-all duration-300 ease-in-out cursor-pointer group">
        <a
          target="_blank"
          href={cvURL}
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

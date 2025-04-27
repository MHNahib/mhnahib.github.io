export const BlogCardComponent = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/47296592?v=4"
            alt="profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-lg font-bold">M. H. Nahib</h4>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <i className="fas fa-calendar-alt text-gray-600"></i>
            <span className="ml-2">Sep 16, 2024</span>
          </div>
          <div>
            <i className="fas fa-tags text-gray-600"></i>
            <span className="ml-2">5 min read</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mt-4">
          How to Create Watermarks with Sharp in Node.js: A Step-by-Step Guide
        </h2>
        <p className="text-gray-600 mt-2">
          A Step-by-Step Guide to Adding Watermarks to Images Using Node.js and
          Sharp
        </p>
      </div>
      <div className="px-6 py-4 border-t border-gray-300">
        <a
          href="https://mhnahib.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-gray-800 hover:text-gray-900"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

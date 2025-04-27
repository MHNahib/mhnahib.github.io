export const Footer = () => {
  return (
    <div className="w-full h-12 bg-[#B1B1B1] flex items-center justify-center text-center p-4">
      <p className="text-sm  text-black font-bold font-primary">
        &copy; {new Date().getFullYear()} Copyright: M. H. Nahib
      </p>
    </div>
  );
};

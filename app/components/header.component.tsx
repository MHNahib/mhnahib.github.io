export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 bg-[#F6F7F8] px-12 text-base">
      <p className="text-2xl font-bold">Hello, </p>
      <nav>
        <ul className="flex space-x-4 font-bold">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

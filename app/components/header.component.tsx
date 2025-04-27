import { useState } from "react";
import { NavLinkModel } from "~/models/navlink.model";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLinkModel[] = [
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const handleNavToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="flex items-center justify-between py-4 bg-[#F6F7F8] px-12 text-base">
        <p className="text-2xl font-bold">Hello, </p>
        <nav>
          <button
            className="lg:hidden flex items-center px-3 py-2"
            onClick={handleNavToggle}
          >
            <img
              src="/assets/burger-menu-right.svg"
              alt="Menu"
              className="h-6 w-6"
            />
          </button>
          <DesktopNav navLinks={navLinks} />
        </nav>
      </div>
      {isOpen && <MobileNav navLinks={navLinks} />}
    </header>
  );
};
const MobileNav = ({ navLinks }: { navLinks: NavLinkModel[] }) => {
  return (
    <div className="py-4 bg-[#F6F7F8] px-12 text-base">
      <ul className="flex flex-col space-y-4 font-bold">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DesktopNav = ({ navLinks }: { navLinks: NavLinkModel[] }) => {
  return (
    <ul className="hidden lg:flex space-x-4 font-bold">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

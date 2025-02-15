"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  menuItems?: MenuItem[];
  showUserProfile?: boolean;
}

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const Header: React.FC<HeaderProps> = ({
  logoText = "logo",
  menuItems = DEFAULT_MENU_ITEMS,
}) => {
  const [mod, setMod] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setMod(!mod);
  };

  return (
    <header className="flex items-center border-b dark:border-gray-900 fixed top-0 left-0 right-0 bg-white dark:bg-[#0a0a0a] z-10 h-[64px]">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-semibold">
            {logoText}
          </a>
        </div>
        <nav className="flex gap-4 items-center">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="hover:underline hover:underline-offset-4"
              onClick={() => {
                const el = document.getElementById(item.href);
                el?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.label}
            </button>
          ))}

          <button onClick={toggleTheme}>
            <Icon
              className="text-3xl"
              icon={
                mod
                  ? "material-symbols-light:dark-mode-outline"
                  : "material-symbols-light:dark-mode"
              }
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

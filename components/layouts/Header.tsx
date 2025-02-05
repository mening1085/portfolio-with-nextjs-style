"use client";

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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC<HeaderProps> = ({
  logoText = "logo",
  menuItems = DEFAULT_MENU_ITEMS,
}) => {
  return (
    <header className="flex items-center border-b fixed top-0 left-0 right-0 bg-white z-10 h-[64px]">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-semibold">
            {logoText}
          </a>
        </div>
        <nav className="flex gap-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

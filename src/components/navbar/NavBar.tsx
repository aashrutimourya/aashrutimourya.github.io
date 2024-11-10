"use client";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavBarLinks {
  href: string;
  label: string;
}

interface NavBarLinkProps extends NavBarLinks {
  mobile?: boolean;
}

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

interface MobileMenuButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

const NAV_BAR_LINKS: Array<NavBarLinks> = [
  {
    href: "/resume",
    label: "Resume",
  },
  {
    href: "/research",
    label: "Research",
  },
  {
    href: "/about",
    label: "About",
  },
];

const NavBarLink: React.FC<NavBarLinkProps> = ({
  href,
  label,
  mobile = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <p
        className={`font-sans text-lg font-semibold hover:animate-hover-scale ${
          mobile ? "" : "md:w-[100px] w-0"
        } ${isActive ? "opacity-100" : "opacity-50"}`}
      >
        {label}
      </p>
    </Link>
  );
};

const Drawer: React.FC<DrawerProps> = ({ onClose, open }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="absolute flex flex-column h-[100vh] w-[100vw] justify-center items-center z-40 top-0 left-0 glass">
      <MobileMenuButton onClick={onClose} icon={<Cross1Icon />} />
      <div className="absolute flex flex-col gap-4 top-1/3">
        {NAV_BAR_LINKS.map((link) => (
          <div onClick={onClose} key={link.href}>
            <NavBarLink {...link} mobile />
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  onClick,
  icon,
}) => {
  return (
    <button className="absolute top-0 right-0 mr-4 mt-6 z-50" onClick={onClick}>
      {icon}
    </button>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden flex visible md:w-0 w-auto">
      {!isOpen ? (
        <MobileMenuButton onClick={toggleDrawer} icon={<HamburgerMenuIcon />} />
      ) : null}
      <Drawer onClose={toggleDrawer} open={isOpen} />
    </div>
  );
};

const DesktopLinks = () => {
  return (
    <div className="md:flex flex-row md:gap-4 gap-0 md:justify-center hidden md:w-auto w-0">
      {NAV_BAR_LINKS.map((link) => (
        <NavBarLink {...link} key={link.href} />
      ))}
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      <div className="w-full absolute top-0 z-10 min-h-8 flex flex-row items-center justify-between md:px-8 py-4 px-4">
        <Link href="/">
          <div className="flex md:flex-row flex-col md:items-center md:gap-6">
            <p className="font-mono md:text-xl text-lg font-bold">
              Aashruti Maurya
            </p>
            <p className=" md:flex hidden font-sans text-xs font-semibold">
              PhD Scholar @ IISC
            </p>
          </div>
        </Link>
        <DesktopLinks />
      </div>
      <MobileMenu />
    </>
  );
};

export default NavBar;

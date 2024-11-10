import { LINKS } from "@/utils/consts";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface FooterLinkProps {
  label: string;
  link: string;
  icon?: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, link, icon }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer noopener">
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <p className="text-base font-medium">{label}</p>
          {icon}
        </div>
        <p className="text-sm opacity-50">{link}</p>
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="px-8 mt-16 flex flex-row  justify-between w-full">
      <div className="w-full border-t-[0.5px] py-8 px-8">
        <div className="flex flex-row gap-8">
          <FooterLink
            label="GitHub"
            link={LINKS.github}
            icon={<LinkedInLogoIcon />}
          />
          <FooterLink
            label="LinkedIn"
            link={LINKS.linkedIn}
            icon={<GitHubLogoIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

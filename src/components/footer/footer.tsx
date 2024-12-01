import { LINKS } from "@/utils/consts";
import Link from "next/link";

import {
  faGoogle,
  faLinkedinIn,
  faGithub,
  faResearchgate,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "../Unit/Icon";

interface FooterLinkProps {
  label: string;
  link: string;
  icon?: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, link, icon }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer noopener">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-base font-medium">{label}</p>
          {icon}
        </div>
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="px-8 mt-16 flex flex-row  justify-between w-full">
      <div className="w-full border-t-[0.5px] py-8 md:px-8 px-4">
        <div className="grid grid-rows-3 grid-flow-col gap-4 md:flex md:flex-row md:justify-between">
          <FooterLink
            label="GitHub"
            link={LINKS.github}
            icon={<Icon src={faGithub} />}
          />
          <FooterLink
            label="LinkedIn"
            link={LINKS.linkedIn}
            icon={<Icon src={faLinkedinIn} />}
          />
          <FooterLink
            label=""
            link={LINKS.twitter}
            icon={<Icon src={faXTwitter} />}
          />
          <FooterLink
            label="Google Scholar"
            link={LINKS.googleScholar}
            icon={<Icon src={faGoogle} />}
          />
          <FooterLink
            label="Research Gate"
            link={LINKS.researchGate}
            icon={<Icon src={faResearchgate} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

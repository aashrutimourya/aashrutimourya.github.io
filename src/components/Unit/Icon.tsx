import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface IconProps {
  src: FontAwesomeIconProps["icon"];
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ src, width = 20, height = 20 }) => {
  return <FontAwesomeIcon icon={src} width={width} height={height} />;
};

export default Icon;

import Image from "next/image";

interface Dimensions {
  width: number;
  height: number;
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  mobile?: Dimensions;
  width: number;
  height: number;
  priority?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  mobile,
  className,
  width,
  height,
  priority,
}) => {
  const hasMobileSizes = mobile?.width && mobile?.height;
  return (
    <>
      {hasMobileSizes ? (
        <Image
          className={`${className} md:hidden block`}
          src={src}
          alt={alt}
          width={mobile.width}
          height={mobile.height}
          priority={priority}
        />
      ) : null}
      <Image
        className={`${className} md:block hidden`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </>
  );
};

export default ResponsiveImage;

import { useImage } from "react-image";
import Image from "next/image";

interface SuspenseImage {
  imageSrc: string;
  alt?: string;
  className?: string;
}

export default function SuspenseImage({
  imageSrc,
  alt,
  className,
}: SuspenseImage) {
  const { src } = useImage({
    srcList: imageSrc,
  });

  return <Image src={src} alt={alt ? alt : ""} className={className} fill={true} />;
}

import { MediaFile } from "@/interfaces/file"
import Image from "next/image"

interface StrapiProps {
  file: MediaFile;
}

export const StrapiImage = ({ file }: StrapiProps) => {
  return <Image
    alt={file?.alternativeText || ""}
    src={`${process.env.STRAPI_MEDIA_URL}${file?.url}`}
    width={file?.width}
    height={file?.height}
    unoptimized={process.env.NODE_ENV === "development" ? true : false}
  />
}
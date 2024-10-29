import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { MediaFile } from "@/interfaces/file";

type Props = {
  file?: MediaFile;
  slug: string;
  title: string;
};

const CoverImage = ({ file, slug, title }: Props) => {
  console.log(file)
  if (!file) return null
  const image = (
    <Image
      alt={file?.alternativeText || ""}
      src={`${process.env.STRAPI_MEDIA_URL}${file?.url}`}
      width={file?.width}
      height={file?.height}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      unoptimized={process.env.NODE_ENV === "development" ? true : false}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { MediaFile } from "@/interfaces/file";

type Props = {
  title: string;
  coverFile?: MediaFile;
  date: string;
  slug: string;
};

export function PostPreview({
  title,
  coverFile,
  date,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} file={coverFile} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}

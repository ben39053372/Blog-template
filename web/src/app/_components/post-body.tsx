import { Block } from "@/interfaces/block";
import markdownStyles from "./markdown-styles.module.css";
import markdownToHtml from "@/lib/markdownToHtml";
import Quote from "./quote";
import Image from "next/image";

type Props = {
  content: Block[];
};

export function PostBody({ content }: Props) {


  const ConvertBlock = () => Promise.all(content.map(async block => {
    if (block.__component === "shared.rich-text") {
      const html = await markdownToHtml(block.body || "")
      return <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    }
    if (block.__component === "shared.media") {
      return <Image
        alt={block.file?.alternativeText || ""}
        src={`${process.env.STRAPI_MEDIA_URL}${block.file?.url}`}
        width={block.file?.width}
        height={block.file?.height}
        unoptimized={process.env.NODE_ENV === "development" ? true : false}
      />

    }
    if (block.__component === "shared.quote") {
      return <Quote data={
        {
          title: block.title || "",
          body: block.body || ""
        }
      } />
    }
  }))


  return (
    <div className="max-w-2xl mx-auto">
      <ConvertBlock />
    </div>
  );
}

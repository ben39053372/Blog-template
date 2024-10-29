import { Block } from "@/interfaces/block";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: Block[];
};

export function PostBody({ content }: Props) {

  console.log({ content })
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

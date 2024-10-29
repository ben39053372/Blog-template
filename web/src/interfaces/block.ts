export type Block = {
  __component: "shared.rich-text" | "shared.media" | "shared.quote";
  id: number;
  title?: string;
  body?: string;
};

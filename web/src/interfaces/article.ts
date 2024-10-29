import { Author } from "./author";
import { Block } from "./block";
import { Category } from "./category";
import { MediaFile } from "./file";
import { StrapiBaseResponse } from "./strapi";

export type Article = {
  title: string;
  description: string;
  slug: string;
};

export type ArticlePopulated = Article & {
  cover?: MediaFile;
  author: StrapiBaseResponse<Author>;
  category: StrapiBaseResponse<Category>;
  blocks: Block[];
};

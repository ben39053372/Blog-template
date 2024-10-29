import { Author } from "./author";
import { Block } from "./block";
import { Category } from "./category";
import { StrapiBaseResponse } from "./strapi";

export type Article = {
  title: string;
  description: string;
  slug: string;
  cover?: string;
};

export type ArticlePopulated = Article & {
  author: StrapiBaseResponse<Author>;
  category: StrapiBaseResponse<Category>;
  blocks: Block[];
};

import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { strapiClient } from "./strapi";
import {
  StrapiCollectionTypesResponse,
  StrapiSingleTypesResponse,
} from "@/interfaces/strapi";
import { Information } from "@/interfaces/information";
import { Article } from "@/interfaces/article";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

// export function getAllPosts(): Post[] {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return posts;
// }

export async function getAllArticles() {
  const articles = await strapiClient.get<
    StrapiCollectionTypesResponse<Article>
  >("/articles?populate=*");
  return articles.data;
}

export async function getBlogInformation() {
  const infos = await strapiClient.get<StrapiSingleTypesResponse<Information>>(
    "/information"
  );
  return infos.data;
}

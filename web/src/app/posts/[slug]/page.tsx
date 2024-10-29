import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const result = await getArticleBySlug(params.slug);
  const post = result.data[0]

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverFile={post.cover}
            date={post.publishedAt}
            author={post.author}
            slug={post.slug}
          />
          <PostBody content={post.blocks} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const result = await getArticleBySlug(params.slug);
  const post = result.data[0]

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post?.cover?.url || ""],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllArticles();

  return posts.data.map((post) => ({
    slug: post.slug,
  }));
}

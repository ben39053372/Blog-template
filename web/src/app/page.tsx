import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/api";
import { getAllArticles } from "@/lib/api";

export default async function Index() {
  const allArticles = await getAllArticles();

  const heroPost = allArticles.data[0];

  const morePosts = allArticles.data.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.cover || ""}
          date={heroPost.createdAt}
          slug={heroPost.slug}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

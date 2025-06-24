import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

import { Noto_Serif } from 'next/font/google'

type Props = {
  posts: Post[];
};
const font_choice = Noto_Serif({
  subsets: ['latin'],
})
 


export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-y-8 md:gap-y-16 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

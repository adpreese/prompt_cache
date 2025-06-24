import { type Author } from "@/interfaces/author";
import Link from "next/link";
import { Noto_Serif } from 'next/font/google'

const font_choice = Noto_Serif({
  subsets: ['latin'],
})
 

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className={`${font_choice.className} hover:underline`}>
          {title}
        </Link>
      </h3>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}

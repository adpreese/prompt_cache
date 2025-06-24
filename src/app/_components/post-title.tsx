import { ReactNode } from "react";
import { Noto_Serif } from 'next/font/google'
 
const font_choice = Noto_Serif({
  subsets: ['latin'],
})
 
type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className={`${font_choice.className} text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left`}>
      {children}
    </h1>
  );
}

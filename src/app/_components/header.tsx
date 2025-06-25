import Link from "next/link";
import Image from "next/image";
import cn from "classnames";


const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-4">
      <Link href="/" className="flex items-center gap-2 hover:underline">
        <Image
          src="/prompt_cache/favicon/spaceman_large.png"
          alt="Spaceman icon"
          width={200}
          height={200}
          className={cn(
            "inline-block h-[1em] w-[1em] object-contain shadow-sm",
            {
              "hover:shadow-lg transition-shadow duration-200": true,
            }
          )}
        />
        Prompt Cache
      </Link>
    </h2>
  );
};

export default Header;

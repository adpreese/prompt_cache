import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
         <p>(c) Adam Reese 2025</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

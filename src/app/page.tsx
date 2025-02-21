import Image from "next/image";
import { Greet } from "./components/greet";
import { Counter } from "./components/counter";

export default function Home() {
  return (
    <article>
      {/* info about me */}
      <section>
        <div>
          <h1>Hi sam here</h1>
          <h2>Full Stack Web Developer</h2>
          <div>Melbourne, Australia</div>
          <p>
            I'm a former civil engineer who self taught software development
            because I enjoy looking at code more than I do looking at rocks.
          </p>

          <div>
            <div>resume</div>
            <div>Links github linkedin email</div>
          </div>

          <span>image of me</span>
        </div>
      </section>

      <div>skills</div>

      <Greet />
      <Counter />

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now i think?
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </article>
  );
}

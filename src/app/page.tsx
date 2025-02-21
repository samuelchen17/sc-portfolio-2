import Image from "next/image";
import { Greet } from "./components/greet";
import { Counter } from "./components/counter";

const BIRTH_YEAR = 1998;

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
            I'm a {new Date().getFullYear() - BIRTH_YEAR} year old former civil
            engineer who self taught software development because I enjoy
            looking at code more than I do looking at rocks.
          </p>

          <div>
            <div>resume</div>
            <div>Links github linkedin email</div>
          </div>

          <span>image of me</span>
        </div>
      </section>

      <section>
        <h2>Current technologies</h2>
      </section>

      <Greet />
      <Counter />
    </article>
  );
}

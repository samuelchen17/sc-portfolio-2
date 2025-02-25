import Image from "next/image";

const BIRTH_YEAR = 1998;

export default function Home() {
  return (
    <article>
      {/* info about me */}
      <section>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Hi sam here</h1>
          <h2 className="text-xl text-gray-400">Full Stack Web Developer</h2>
          <span>Melbourne, Australia</span>
          <p>
            I'm a {new Date().getFullYear() - BIRTH_YEAR} year old former civil
            engineer who self taught software development because I enjoy
            looking at a screen more than I do looking at rocks.
          </p>
        </div>

        {/* resume and links */}
        <div>
          <div>resume icon</div>
          <div>Links github linkedin email</div>
        </div>

        <Image
          src="/dp.png"
          alt="photo of sam"
          className="rounded-md"
          width={150}
          height={150}
          priority
        />
      </section>

      <section>
        <h2>Current technologies</h2>
        <p>
          Typescript, react, tailwind, nodeJs, mongoDb, nextJs, ExpressJs, Git{" "}
        </p>
      </section>
    </article>
  );
}

"use client";
import React from "react";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <div>About</div>
      <button onClick={() => router.push("/")}>go Home</button>
    </div>
  );
};

export default About;

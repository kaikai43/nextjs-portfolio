import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "View my selected projects",
};

export default async function ProjectsPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif mb-5'>Projects</h1>
      <div>Some of my portfolio projects</div>
    </section>
  );
}

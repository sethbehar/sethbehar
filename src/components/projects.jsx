import { Card, CardContent } from "@/components/ui/card";
import { ColourfulText } from "./ui/colorful-text";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Internshark",
      description: "",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      link: "https://internshark.us",
      image: "/internshark.png",
    },
    {
      title: "Internos",
      description: "",
      technologies: ["Next.js", "Flask", "PostgreSQL"],
      link: "https://internos.vercel.app",
      image: "/internos.png",
    },
    {
      title: "imcooked.ai",
      description: "",
      technologies: ["Next.js", "MongoDB"],
      link: "https://imcooked.ai",
      image: "/imcooked.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">
        <ColourfulText text={"Some of the noteworthy projects I have built"} />
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-gray-700 rounded-lg mb-4 overflow-hidden relative"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  layout="fill"
                  objectFit="cover"
                />
              </a>
              <h3 className="text-xl font-bold gradient-text mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-white bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

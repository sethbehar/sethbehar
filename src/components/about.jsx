import Image from "next/image"

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Curious about me? Here you have it:</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="prose prose-invert">
          <p className="text-gray-400">
            I'm a passionate Frontend Developer with a keen eye for design and user experience. I specialize in building
            responsive web applications using modern technologies.
          </p>
          <p className="text-gray-400">
            When I'm not coding, you can find me exploring new technologies, reading tech articles, or contributing to
            open-source projects.
          </p>
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src="/headshot.jpg"
            alt="About"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}


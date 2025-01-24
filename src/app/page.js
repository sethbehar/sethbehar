import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white">
      <Header />
      <main>
        <TracingBeam className="px-6">
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
        </TracingBeam>
      </main>
      <Footer />
    </div>

  )
}


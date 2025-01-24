import Image from "next/image"
import { ColourfulText } from "./ui/colorful-text"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><ColourfulText text="Hi, I'm Seth" /></h1>
          <p className="text-gray-400 mb-6 max-w-2xl">
            I'm a Data Analyst and Backend Developer based in Florida who likes to create data drive products.
          </p>
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <span>📍 Gainesville, Florida</span>
            <span>🌐 Remote</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">
              {/* <Github className="w-5 h-5" /> */}
            </a>
            <a href="#" className="hover:text-primary">
              {/* <Linkedin className="w-5 h-5" /> */}
            </a>
            <a href="#" className="hover:text-primary">
              {/* <Twitter className="w-5 h-5" /> */}
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64">
          <Image
            src="/headshot.jpg"
            alt="Profile"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}


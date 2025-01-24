import Image from "next/image"
import { ColourfulText } from "./ui/colorful-text"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><ColourfulText text="Hi, I'm Seth" /></h1>
          <p className="text-gray-400 mb-6 max-w-2xl">
            I'm a Backend Developer and Data Analyst based in Florida who likes to create data drive products.
          </p>
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <span>📍 Gainesville, Florida</span>
            <span>🌐 Remote</span>
          </div>
        </div>
      </div>
    </section>
  )
}


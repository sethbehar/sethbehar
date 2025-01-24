import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          What's next? Feel free to reach out if you're looking to chat!
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            sethbehar@gmail.com
          </Button>
          <Button variant="outline" className="gap-2">
            <a
              href={"www.linkedin.com/in/seth-behar"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/linkedin.svg"}
                alt={`image`}
                width={30}
                height={30}
              />
            </a>
          </Button>
          <Button variant="outline" className="gap-2">
            <a
              href={"www.github.com/sethbehar"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/github.svg"}
                alt={`image`}
                width={30}
                height={30}
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}


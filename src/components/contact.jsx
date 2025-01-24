import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          What's next? Feel free to reach out if you're looking for a developer!
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            reachsagarshah@gmail.com
          </Button>
          <Button variant="outline" className="gap-2">
            <Phone className="w-4 h-4" />
            +91 8980500565
          </Button>
        </div>
        <div className="flex justify-center gap-4">
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
    </section>
  )
}


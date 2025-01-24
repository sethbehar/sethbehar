import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">&lt;SB /&gt;</div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#work" className="hover:text-primary">
            Work
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
          <Button variant="outline" className="text-black border-white">
            Resume
          </Button>
        </div>
      </nav>
    </header>
  )
}


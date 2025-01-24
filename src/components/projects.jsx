import { Card, CardContent } from "@/components/ui/card"

export function Projects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Some of the noteworthy projects I have built:</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-700 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Tailwind</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


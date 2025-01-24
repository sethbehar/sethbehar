import { Card, CardContent } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="work" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Here is a quick summary of my most recent experiences:</h2>
      <div className="grid gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <p className="text-gray-400">Company Name</p>
                </div>
                <span className="text-gray-400">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-400">
                <li>Led frontend development for multiple projects</li>
                <li>Implemented responsive designs and optimized performance</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


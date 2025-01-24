import { Card, CardContent } from "@/components/ui/card";
import { ColourfulText } from "./ui/colorful-text";

export function Experience() {
  // Array of experiences with different attributes
  const experiences = [
    {
      title: "Business Intelligence Developer",
      company: "WebstaurantStore",
      duration: "Summer 2024",
    },
    {
      title: "Software Engineer",
      company: "Shopilot",
      duration: "Fall 2023",
    },
    {
      title: "Software Engineer",
      company: "eBacon",
      duration: "Summer 2023",
    },
  ];

  return (
    <section id="work" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">
        <ColourfulText text={"Here is a quick summary of my most recent experiences:"} />
      </h2>
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3
                    className="text-xl font-bold gradient-text"
                  >
                    {experience.title}
                  </h3>
                  <p className="text-gray-400">{experience.company}</p>
                </div>
                <span className="text-gray-400">{experience.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

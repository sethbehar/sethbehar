import { ColourfulText } from "./ui/colorful-text";

export function TechStack() {
  // Array of image file names (stored in public/images/techstack/)
  const techStackImages = [
    "react.svg",
    "mongo.svg",
    "firebase.svg",
    "postgres.svg",
    "python.svg",
    "sql.svg",
    "github.svg",
    "powerbi.svg",
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8"><ColourfulText text={"Tech Stack"}/></h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
        {techStackImages.map((image, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <img
              src={`/${image}`}
              alt={image.replace(".png", "")}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

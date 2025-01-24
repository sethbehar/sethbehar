export function TechStack() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Tech stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="w-12 h-12 bg-gray-700 rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  )
}


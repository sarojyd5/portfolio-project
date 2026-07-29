const PROJECTS = [
  { img: "https://picsum.photos/seed/jenna-proj1/600/400", title: "Website Design", tags: "Web Design, App Design" },
  { img: "https://picsum.photos/seed/jenna-proj2/600/400", title: "Website Design", tags: "Web Design, App Design" },
  { img: "https://picsum.photos/seed/jenna-proj3/600/400", title: "Website Design", tags: "Web Design, App Design" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-baseAlt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm">
            MY WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">RECENT PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => (
            <div key={i} className="bg-card rounded-2xl overflow-hidden group">
              <div className="p-4">
                <img
                  alt={p.title}
                  className="w-full rounded-xl transition-transform group-hover:scale-105 duration-500"
                  src={p.img}
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <p className="text-gray-500 text-sm">{p.tags}</p>
                </div>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all shrink-0"
                >
                  →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-8 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    title: "Frontend Development",
    desc: "Responsive, interactive user interfaces built with React, JavaScript, HTML, and CSS.",
    shape: "rounded",
    highlight: false,
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end web applications — from database and API to a polished, working frontend.",
    shape: "circle",
    highlight: false,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-friendly interfaces designed in Figma before a single line of code is written.",
    shape: "diamond",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            WHAT <span className="text-accent">I OFFER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`p-8 rounded-2xl transition-all duration-300 ${
                s.highlight
                  ? "bg-accent text-white"
                  : "border border-white/5 hover:border-accent"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  s.highlight ? "bg-white/20" : "bg-accent/10"
                }`}
              >
                <div
                  className={`w-6 h-6 border-2 ${
                    s.highlight ? "border-white" : "border-accent"
                  } ${
                    s.shape === "circle"
                      ? "rounded-full"
                      : s.shape === "diamond"
                      ? "rotate-45"
                      : "rounded"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className={`mb-6 ${s.highlight ? "text-blue-100" : "text-gray-500"}`}>
                {s.desc}
              </p>
              <a
                href="#"
                className={`font-semibold flex items-center hover:underline text-accent ${
                  s.highlight ? "text-white" : "text-accent"
                }`}
              >
                LEARN MORE <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

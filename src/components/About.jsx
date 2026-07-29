const ABOUT_IMG = "/about.jpg";

const STATS = [
  { value: "280+", label: "Google Reviews" },
  { value: "15+", label: "Years Experience" },
  { value: "49+", label: "Awards Won" },
  { value: "120+", label: "Projects Shipped" },
];

const HIGHLIGHTS = [
  "UI/UX design in Figma",
  "Frontend development with React & JavaScript",
  "Responsive layouts with HTML & CSS",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="hidden md:block absolute left-[-5%] top-[20%] w-[300px] h-[300px] rounded-full border border-white/10 deco-lines -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-16">
          <div className="relative order-1">
            <div className="bg-blue-900/20 rounded-3xl p-4">
              <img
                alt="Studio workspace"
                className="rounded-2xl w-full object-cover h-[320px] sm:h-[420px] md:h-[500px]"
                src={ABOUT_IMG}
              />
            </div>
            <div className="hidden sm:block absolute -bottom-10 -left-10 w-40 h-40 border-8 border-accent/20 rounded-full" />
          </div>

          <div className="order-2">
            <span className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              I AM AVAILABLE FOR{" "}
              <span className="text-accent">
                FULL STACK
                <br className="hidden sm:block" />
                DEVELOPMENT
              </span>{" "}
              PROJECTS
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a full stack developer with a strong eye for design. I
              start by shaping ideas in Figma, then build them into real,
              working products with React, JavaScript, HTML, and CSS. I like
              owning a project end-to-end — from wireframe to a polished,
              responsive interface.
            </p>

            <ul className="space-y-3 mb-10">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs mr-3 shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-accent hover:bg-accent-hover px-8 py-4 rounded-full font-bold flex items-center transition-all">
              GET IN TOUCH <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border border-white/5 rounded-2xl p-6 sm:p-8 bg-white/5">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center sm:text-left ${
                i !== 0 ? "sm:border-l sm:border-line sm:pl-6" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-tight mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    place: "Freelance / Personal Projects",
    period: "2023 — Present",
    desc: "Designing UIs in Figma and building them into responsive, working web apps with React, JavaScript, HTML, and CSS.",
  },
  {
    role: "Frontend Developer",
    place: "Self-driven Projects",
    period: "2022 — 2023",
    desc: "Built and styled interactive interfaces with React and vanilla JavaScript, focusing on clean, responsive layouts.",
  },
  {
    role: "Web Development Fundamentals",
    place: "Self-taught",
    period: "2021 — 2022",
    desc: "Learned the core web stack — HTML, CSS, and JavaScript — and started designing interfaces in Figma.",
  },
];

const EDUCATION = [
  {
    role: "Bachelor in Computer Application (BCA)",
    place: "Kathford International College of Engineering and Management",
    period: "",
    desc: "Studied core computer science and application development, building the foundation for full stack web development.",
  },
];

function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20" />
      {!isLast && (
        <span className="absolute left-[7px] top-6 bottom-[-2rem] w-0.5 bg-line" />
      )}
      {item.period && (
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {item.period}
        </span>
      )}
      <h3 className="text-xl font-bold mt-1">{item.role}</h3>
      <p className="text-gray-500 text-sm mb-2">{item.place}</p>
      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <span className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm">
            MY JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            <span className="text-accent">EXPERIENCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Experience
            </h3>
            {EXPERIENCE.map((item, i) => (
              <TimelineItem key={item.role} item={item} isLast={i === EXPERIENCE.length - 1} />
            ))}
          </div>

          <div className="space-y-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Education
            </h3>
            {EDUCATION.map((item, i) => (
              <TimelineItem key={item.role} item={item} isLast={i === EDUCATION.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

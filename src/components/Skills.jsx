const SKILLS = [
  { name: "React.js", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "HTML5", level: 92 },
  { name: "CSS3", level: 90 },
  { name: "Figma (UI/UX Design)", level: 80 },
];

// Tools derived from the skill set above
const TOOLS = [
  "Figma",
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "VS Code",
  "npm",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-baseAlt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <span className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm">
            WHAT I DO WELL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            MY <span className="text-accent">SKILLS</span> &amp; EXPERTISE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Skill bars */}
          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide text-gray-300">
              Tools I Use
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TOOLS.map((tool) => (
                <div
                  key={tool}
                  className="border border-white/5 rounded-xl px-4 py-5 text-center bg-card hover:border-accent transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-gray-200">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

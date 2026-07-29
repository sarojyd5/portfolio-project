const CLIENTS = ["ORBIT", "NIMBUS", "FLARE", "ATLAS", "VELA"];

export default function LogoStrip() {
  return (
    <section className="py-10 md:py-12 border-y border-white/5 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-600 mb-6">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-6">
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-widest text-gray-500 opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

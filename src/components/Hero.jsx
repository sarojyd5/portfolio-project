const HERO_IMG = "/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 40%)",
      }}
    >
      <div className="hidden md:block absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full border border-white/10 -z-10 opacity-30" />
      <div className="hidden md:block absolute right-[5%] top-[15%] w-[500px] h-[500px] rounded-full border border-white/10 -z-10 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="text-accent font-semibold tracking-widest uppercase mb-4 block text-sm">
            Saroj Kumar Yadav
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            HEY! I'M SAROJ
            <br />
            <span className="text-accent">FULL STACK DEVELOPER</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I'm a full stack developer who designs interfaces in Figma and
            brings them to life with React, JavaScript, HTML, and CSS —
            turning ideas into fast, responsive web apps from the first
            wireframe to the final line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#contact-form" className="bg-accent hover:bg-accent-hover px-8 py-4 rounded-full font-bold flex items-center transition-all">
  GET IN TOUCH <span className="ml-2">→</span>
</a>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BACQCfizN/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                gh
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] mx-auto overflow-hidden rounded-2xl md:rounded-none">
            <img
              alt="Designer portrait"
              className="w-full object-cover aspect-square"
              src={HERO_IMG}
            />
          </div>
          <div className="absolute top-10 right-4 md:right-0 w-8 h-8 bg-green-500/20 blur-sm rounded-full" />
          <div className="absolute bottom-10 md:bottom-20 left-4 md:left-0 w-12 h-12 bg-blue-500/20 blur-sm rounded-full" />
        </div>
      </div>
    </section>
  );
}

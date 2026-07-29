const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const SERVICES = ["Frontend Development", "Full Stack Development", "UI/UX Design"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-baseAlt">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold">
              S
            </div>
            <span className="text-xl font-bold tracking-wider uppercase">Saroj</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
            A full stack developer designing in Figma and building with
            React, JavaScript, HTML, and CSS — turning ideas into fast,
            responsive web apps.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/share/1BACQCfizN/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-accent hover:border-accent transition-colors"
            >
              f
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-accent hover:border-accent transition-colors"
            >
              gh
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-accent hover:border-accent transition-colors"
            >
              in
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service} className="text-gray-500 text-sm">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>ydsaroj0530@gmail.com</li>
            <li>+977 981-0899601</li>
            <li>Kathmandu, Nepal</li>
          </ul>
          <a
            href="#contact-form"
            className="inline-flex items-center mt-4 text-accent font-semibold text-sm hover:underline"
          >
            SEND A MESSAGE <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-500 text-xs">© 2026 Saroj Kumar Yadav. All Rights Reserved.</p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

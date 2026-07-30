import { useState } from "react";

const CONTACT_INFO = [
  { label: "Email", value: "ydsaroj0530@gmail.com" },
  { label: "Phone", value: "+977 981-0899601" },
  { label: "Location", value: "Kathmandu, Nepal" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Hook this up to your backend / email service of choice.
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-baseAlt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <span className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            LET'S WORK <span className="text-accent">TOGETHER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind, or just want to say hi? Fill out the
              form and I'll get back to you within a couple of days.
            </p>
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <div key={item.label}>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                    {item.label}
                  </div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/share/1BACQCfizN/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                f
              </a>
              <a
                 href="https://github.com/sarojyd5?tab=repositories"
                 target="_blank"
                 rel="noopener noreferrer"
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

          {/* Form panel */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-accent/40 bg-accent/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-2">Thanks, {form.name}!</h3>
                <p className="text-gray-400">
                  Your message has been received. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-card border border-line px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-card border border-line px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-card border border-line px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-hover px-8 py-4 rounded-full font-bold flex items-center transition-all w-full sm:w-auto justify-center"
                >
                  SEND MESSAGE <span className="ml-2">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

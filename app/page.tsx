import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Software &middot; AI &middot; Mobile</p>
          <h1>
            We build software that <em>works for you</em>
          </h1>
          <p>
            Hollow Lattice crafts intelligent applications, AI-powered tools,
            and mobile experiences designed to solve real problems.
          </p>
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-inner">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">
            Focused on building things that matter
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">☯</div>
              <h3>Mobile Apps</h3>
              <p>
                Native and cross-platform apps for iOS and Android, built for
                performance and a seamless user experience.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚗</div>
              <h3>SaaS Products</h3>
              <p>
                Scalable web applications and software-as-a-service platforms
                from concept through launch and beyond.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">✦</div>
              <h3>AI-Powered Tools</h3>
              <p>
                Intelligent features and standalone AI applications that
                automate workflows and surface insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build something together</h2>
          <p>
            Have a project in mind or want to learn more? Reach out and
            we&apos;ll get back to you.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

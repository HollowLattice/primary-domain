"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Smartphone, Globe, Sparkles, ArrowDown } from "lucide-react";
import * as Separator from "@radix-ui/react-separator";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android, built for performance and a seamless user experience.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "SaaS Products",
    desc: "Scalable web applications and software-as-a-service platforms from concept through launch and beyond.",
    color: "mint",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    desc: "Intelligent features and standalone AI applications that automate workflows and surface insights.",
    color: "accent",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-mint/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-light rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wide uppercase">
              Software · AI · Mobile
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-display font-normal text-ink leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            We build software that{" "}
            <span className="italic text-accent">works for you</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg text-ink-light max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Hollow Lattice crafts intelligent applications, AI-powered tools,
            and mobile experiences designed to solve real problems.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-lg no-underline transition-all hover:bg-accent-dark hover:-translate-y-px hover:shadow-lg hover:shadow-accent/20"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-surface text-ink text-sm font-medium rounded-lg border border-border no-underline transition-all hover:bg-cream-dark hover:-translate-y-px"
            >
              See Our Work
              <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-cream-dark/50">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-accent mb-3">
              What We Do
            </p>
            <h2
              className="font-display font-normal text-ink tracking-tight max-w-md mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Focused on building things that matter
            </h2>
            <p className="text-ink-light max-w-lg mb-12">
              From concept to launch, we design and develop digital products that
              people love to use and businesses rely on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="group bg-surface border border-border rounded-xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03] hover:border-border/60"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    svc.color === "accent"
                      ? "bg-accent-light text-accent group-hover:bg-accent group-hover:text-white"
                      : "bg-mint-light text-mint group-hover:bg-mint group-hover:text-white"
                  }`}
                >
                  <svc.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-accent mb-3">
              Contact
            </p>
            <h2
              className="font-display font-normal text-ink tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Let&apos;s build something together
            </h2>
            <p className="text-ink-light text-lg leading-relaxed max-w-lg mx-auto">
              Have a project in mind or want to learn more? Reach out and
              we&apos;ll get back to you.
            </p>
          </motion.div>

          <ContactForm />

          <Separator.Root className="h-px bg-border max-w-xs mx-auto my-10" />

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-sm text-ink-faint"
          >
            Or email us directly at{" "}
            <a
              href="mailto:hello@hollowlattice.com"
              className="text-ink no-underline border-b border-border pb-px transition-colors hover:text-accent hover:border-accent"
            >
              hello@hollowlattice.com
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
}

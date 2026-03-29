"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Smartphone, Globe, Sparkles, ArrowRight } from "lucide-react";
import * as Separator from "@radix-ui/react-separator";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android, built for performance and a seamless user experience.",
    gradient: "from-accent to-violet",
    bgLight: "bg-accent-light",
  },
  {
    icon: Globe,
    title: "SaaS Products",
    desc: "Scalable web applications and software-as-a-service platforms from concept through launch and beyond.",
    gradient: "from-mint to-accent",
    bgLight: "bg-mint-light",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    desc: "Intelligent features and standalone AI applications that automate workflows and surface insights.",
    gradient: "from-violet to-rose",
    bgLight: "bg-violet-light",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-28 pb-20 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-violet/5 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute inset-12 bg-gradient-to-tr from-mint/8 via-accent/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        </div>

        <div className="max-w-2xl text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 backdrop-blur-sm border border-border-light rounded-full mb-8 shadow-sm shadow-black/[0.03]"
          >
            <span className="w-1.5 h-1.5 bg-gradient-to-r from-accent to-mint rounded-full animate-pulse" />
            <span className="text-xs font-medium text-ink-light tracking-wide uppercase">
              Software · AI · Mobile
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-display font-normal text-ink leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}
          >
            Software that{" "}
            <span className="italic bg-gradient-to-r from-accent via-violet to-accent bg-clip-text text-transparent animate-gradient underline decoration-accent/30 underline-offset-[6px] decoration-[2px]">
              works for you
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg text-ink-light max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Hollow Lattice builds applications, AI-powered tools, and mobile
            experiences designed to address real users needs — not a
            one-size-fits-all.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 btn-shimmer text-white text-sm font-medium rounded-full no-underline transition-all hover:shadow-lg hover:shadow-accent/25 animate-glow"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get in Touch
              <ArrowRight size={15} />
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3 bg-surface text-ink text-sm font-medium rounded-full border border-border no-underline transition-all shadow-sm shadow-black/[0.03]"
              whileHover={{ scale: 1.04, y: -2, borderColor: "var(--color-accent)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              See Our Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-cream-dark/40 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="max-w-lg mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              What We Do
            </p>
            <h2
              className="font-display font-normal text-ink tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
            >
              Focused on building things that matter
            </h2>
            <p className="text-ink-light leading-relaxed">
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
                viewport={{ once: true, margin: "-40px" }}
                variants={scaleIn}
                custom={i + 1}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group bg-surface rounded-2xl p-8 border border-border-light transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/[0.06] hover:border-accent/20 relative overflow-hidden"
              >
                {/* Gradient accent line at top */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${svc.bgLight} text-accent group-hover:bg-gradient-to-br group-hover:${svc.gradient} group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:scale-110`}
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
      <section id="contact" className="py-28 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/[0.04] via-violet/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              Contact
            </p>
            <h2
              className="font-display font-normal text-ink tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
            >
              Let&apos;s build something together
            </h2>
            <p className="text-ink-light leading-relaxed max-w-md mx-auto">
              Have a project in mind or want to learn more? Reach out and
              we&apos;ll get back to you.
            </p>
          </motion.div>

          <ContactForm />

          <Separator.Root className="h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-[200px] mx-auto my-10" />

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
              className="text-ink-light font-medium no-underline transition-colors hover:text-accent"
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

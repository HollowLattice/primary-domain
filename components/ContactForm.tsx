"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 flex flex-col gap-3 text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-ink font-body outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/10 placeholder:text-ink-faint"
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-ink font-body outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/10 placeholder:text-ink-faint"
        />
      </div>
      <textarea
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-ink font-body outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/10 placeholder:text-ink-faint resize-y min-h-[140px]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg transition-all hover:bg-accent-dark hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-mint"
          >
            <CheckCircle size={16} />
            Message sent! We&apos;ll get back to you soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-red-500"
          >
            <AlertCircle size={16} />
            Something went wrong. Please try again or email us directly.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

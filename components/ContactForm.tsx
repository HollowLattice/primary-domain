"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const inputClasses =
  "w-full px-4 py-3.5 bg-surface border border-border rounded-xl text-sm text-ink font-body outline-none transition-all duration-300 focus:border-accent focus:ring-[3px] focus:ring-accent/10 focus:shadow-lg focus:shadow-accent/[0.06] placeholder:text-ink-faint/70";

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
      className="max-w-lg mx-auto mt-10 flex flex-col gap-3.5 text-left"
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <motion.input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className={inputClasses}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className={inputClasses}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>
      <motion.textarea
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        className={`${inputClasses} resize-none min-h-[160px]`}
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="self-start inline-flex items-center gap-2 px-7 py-3 btn-shimmer text-white text-sm font-medium rounded-full transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2.5 text-sm text-mint bg-mint-light px-4 py-3 rounded-xl border border-mint/10"
          >
            <CheckCircle size={16} />
            Message sent! We&apos;ll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2.5 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl border border-red-100"
          >
            <AlertCircle size={16} />
            Something went wrong. Please try again or email us directly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

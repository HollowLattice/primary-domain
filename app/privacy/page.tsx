"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Privacy() {
  return (
    <>
      <Nav />

      <main className="max-w-[680px] mx-auto px-6 pt-40 pb-24">
        <motion.div
          className="mb-12 pb-8 border-b border-border"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
            Legal
          </p>
          <h1 className="font-display font-normal text-4xl tracking-tight text-ink mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-ink-faint">Effective date: March 28, 2026</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="space-y-0 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:text-ink [&>h2]:mt-10 [&>h2]:mb-3 [&>p]:text-[0.95rem] [&>p]:text-ink-light [&>p]:leading-7 [&>p]:mb-3 [&>ul]:pl-5 [&>ul]:mb-3 [&>ul]:space-y-2 [&>ul]:list-disc [&_li]:text-[0.95rem] [&_li]:text-ink-light [&_li]:leading-7 [&_a]:text-accent [&_a]:font-medium [&_a]:no-underline [&_a]:transition-colors hover:[&_a]:text-accent-dark"
        >
          <p>
            Hollow Lattice LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) operates mobile applications and web-based
            services. This Privacy Policy describes how we collect, use, and
            protect your information when you use our products.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong className="text-ink">Information you provide:</strong> Name, email address, and
              any content you submit through our apps or contact forms.
            </li>
            <li>
              <strong className="text-ink">Usage data:</strong> Anonymous analytics such as app usage
              patterns, device type, operating system version, and crash reports.
            </li>
            <li>
              <strong className="text-ink">Device identifiers:</strong> Advertising identifiers or
              similar device-level identifiers, only when necessary for app
              functionality.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide, maintain, and improve our applications and services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze usage trends to improve user experience</li>
            <li>Send important notices about changes to our services</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data only in
            the following cases:
          </p>
          <ul>
            <li>
              With service providers who assist in operating our apps (e.g.,
              analytics, hosting), under agreements that protect your data
            </li>
            <li>When required by law, regulation, or legal process</li>
            <li>
              To protect the rights, safety, or property of Hollow Lattice, our
              users, or the public
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, loss, or misuse.
            However, no method of electronic storage is 100% secure.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our apps may contain links to third-party websites or integrate
            third-party SDKs (such as analytics or crash reporting tools). These
            services have their own privacy policies, and we encourage you to
            review them.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do
            not knowingly collect personal information from children. If we
            become aware that we have collected data from a child under 13, we
            will delete it promptly.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of certain data collection</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at the address below.
          </p>

          <h2>Account Deletion</h2>
          <p>
            If any of our apps allow you to create an account, you may request
            deletion of your account and associated data by contacting us at{" "}
            <a href="mailto:hello@hollowlattice.com">hello@hollowlattice.com</a>.
            We will process your request within 30 days.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by posting the updated policy within our
            apps or on our website with a revised effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>
            Hollow Lattice LLC
            <br />
            <a href="mailto:hello@hollowlattice.com">hello@hollowlattice.com</a>
          </p>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}

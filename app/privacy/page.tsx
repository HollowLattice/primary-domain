import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Hollow Lattice",
};

export default function Privacy() {
  return (
    <>
      <Nav />

      <main className="policy">
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="policy-date">Effective date: March 28, 2026</p>
        </div>

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
            <strong>Information you provide:</strong> Name, email address, and
            any content you submit through our apps or contact forms.
          </li>
          <li>
            <strong>Usage data:</strong> Anonymous analytics such as app usage
            patterns, device type, operating system version, and crash reports.
          </li>
          <li>
            <strong>Device identifiers:</strong> Advertising identifiers or
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
      </main>

      <Footer />
    </>
  );
}

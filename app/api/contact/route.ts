import { NextRequest, NextResponse } from "next/server";

// POST /api/contact
// Receives contact form submissions.
// Right now it logs and returns success — wire up email (Resend, SendGrid)
// or a database (Supabase, Prisma) when you're ready.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------------
    // TODO: Add your email service or database here. Examples:
    //
    // Option 1: Send email via Resend (https://resend.com)
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'noreply@hollowlattice.com',
    //     to: 'hello@hollowlattice.com',
    //     subject: `Contact from ${name}`,
    //     text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    //   });
    //
    // Option 2: Save to Supabase
    //   import { createClient } from '@supabase/supabase-js';
    //   const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    //   await supabase.from('contacts').insert({ name, email, message });
    //
    // ---------------------------------------------------------------

    // For now, log the submission (visible in Vercel function logs)
    console.log("📩 New contact submission:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

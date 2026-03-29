import { NextResponse } from "next/server";

// GET /api/hello
// This is an example API route — runs as a Vercel serverless function in production.
// You can add as many routes as you need in app/api/

export async function GET() {
  return NextResponse.json({
    message: "Hello from Hollow Lattice API",
    timestamp: new Date().toISOString(),
  });
}

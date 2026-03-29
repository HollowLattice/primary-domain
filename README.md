# Hollow Lattice

Full-stack Next.js application deployed on Vercel.

## Project Structure

```
hollowlattice/
├── app/
│   ├── api/
│   │   ├── hello/route.ts      ← Example API endpoint
│   │   └── contact/route.ts    ← Contact form handler
│   ├── privacy/page.tsx        ← Privacy policy (for app stores)
│   ├── globals.css             ← All styles
│   ├── layout.tsx              ← Root layout with fonts & metadata
│   └── page.tsx                ← Homepage
├── components/
│   ├── Nav.tsx                 ← Navigation bar
│   ├── Footer.tsx              ← Site footer
│   └── ContactForm.tsx         ← Contact form (client component)
├── public/                     ← Static assets (put images, favicon here)
├── .env.example                ← Environment variable template
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Copy env template
cp .env.example .env.local

# 3. Run dev server
npm run dev

# 4. Open http://localhost:3000
```

## Deploy to Vercel

### First-time setup

1. Push this repo to GitHub
2. Go to https://vercel.com and sign in with GitHub
3. Click "Add New Project" → import your repo
4. Vercel auto-detects Next.js — just click "Deploy"
5. Your site is live at `your-project.vercel.app` in about 60 seconds

### Connect your custom domain

1. In Vercel Dashboard → your project → Settings → Domains
2. Add `hollowlattice.com`
3. Vercel will give you DNS records to add in Porkbun
4. Update your Porkbun DNS:
   - Delete the old GitHub Pages A records
   - Add a CNAME record: host=`@`, answer=`cname.vercel-dns.com`
   - Update www CNAME: host=`www`, answer=`cname.vercel-dns.com`
5. Vercel handles SSL automatically

### Environment variables

Add any secrets (API keys, database URLs) in:
- Vercel Dashboard → Settings → Environment Variables (for production)
- `.env.local` file (for local development, never commit this)

## Adding New API Routes

Create a new folder in `app/api/` with a `route.ts` file:

```
app/api/your-endpoint/route.ts
```

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "your response" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // process the request
  return NextResponse.json({ success: true });
}
```

These become serverless functions on Vercel automatically:
- `GET /api/your-endpoint`
- `POST /api/your-endpoint`

## Adding New Pages

Create a new folder in `app/` with a `page.tsx` file:

```
app/about/page.tsx     → hollowlattice.com/about
app/blog/page.tsx      → hollowlattice.com/blog
app/apps/page.tsx      → hollowlattice.com/apps
```

## Next Steps

- [ ] Set up email forwarding (hello@hollowlattice.com) via Porkbun or Google Workspace
- [ ] Wire up contact form to Resend or SendGrid (see comments in api/contact/route.ts)
- [ ] Add a database (Supabase free tier is great to start)
- [ ] Register Apple Developer + Google Play accounts
- [ ] Build your first app!

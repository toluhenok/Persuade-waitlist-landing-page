# Persuade — Waitlist Landing Page

AI Interview Coach waitlist page. Collects name + email for early access.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create project → Connect GitHub → Select this repo
4. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
5. Click "Save and Deploy"

## Deploy to Netlify (alternative)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy

## Connect Email Collection

### Option A: Tally (free, unlimited)
1. Create a form at [tally.so](https://tally.so) with Name + Email fields
2. Get your form ID from the URL
3. Update the handleSubmit function in app/page.tsx to POST to Tally

### Option B: LaunchList ($19 one-time)
1. Create waitlist at [getlaunchlist.com](https://getlaunchlist.com)
2. Replace the form action with their API endpoint

## Analytics
Uncomment the Plausible script in app/layout.tsx and add your domain.

## Links
- X: [@toluhenok](https://x.com/toluhenok)
- LinkedIn: [toluhenok](https://linkedin.com/in/toluhenok)

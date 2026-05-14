import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persuade — AI Interview Coach | Join the Waitlist",
  description:
    "Practice interviews with an AI coach that scores every answer, tells you what went wrong, and shows you how to fix it. Any role. Any industry. Voice-first.",
  keywords: [
    "interview practice",
    "AI interview coach",
    "mock interview",
    "job interview prep",
    "interview feedback",
  ],
  openGraph: {
    title: "Persuade — Your AI Interview Coach",
    description:
      "Practice for any role with an AI that scores your answers and coaches you to improve. Join the waitlist.",
    type: "website",
    url: "https://getpersuade.com",
    siteName: "Persuade",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persuade — AI Interview Coach",
    description:
      "Practice interviews with AI. Get scored. Get coached. Any role.",
    creator: "@toluhenok",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* 
          ANALYTICS: Uncomment and add your domain:
          <script defer data-domain="getpersuade.com" src="https://plausible.io/js/script.js"></script>
        */}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

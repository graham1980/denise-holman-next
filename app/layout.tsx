import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denise Holman – Psychic & Spiritual Medium in Torquay",
  description: "Psychic and spiritual medium with 30+ years’ experience offering readings, guidance and healing. In-person or online sittings. Compassionate, trusted support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical */}
        <link rel="canonical" href="https://deniseholman.com" />

        {/* Open Graph (Facebook / WhatsApp / Messenger) */}
        <meta property="og:title" content="Denise Holman – Psychic & Spiritual Medium in Torquay" />
        <meta property="og:description" content="Psychic and spiritual medium with 30+ years’ experience offering readings, guidance and healing. In-person or online sittings." />
        <meta property="og:image" content="https://deniseholman.com/images/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deniseholman.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Denise Holman – Psychic & Spiritual Medium in Torquay" />
        <meta name="twitter:description" content="Psychic mediumship, readings, and trance healing with over 30 years' experience. In-person or online sessions available." />
        <meta name="twitter:image" content="https://deniseholman.com/images/preview.jpg" />

        {/* Favicon / Icons (optional) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Denise Holman",
              jobTitle: "Psychic & Spiritual Medium",
              description:
                "Psychic and spiritual medium with over 30 years of experience offering readings, guidance, and trance healing.",
              telephone: "07957603325",
              email: "d-holman1@sky.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Torquay",
                addressRegion: "Devon",
                addressCountry: "UK",
              },
              url: "https://deniseholman.com",
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

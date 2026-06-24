import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass | Digital Transformation Consulting South Africa",
  description: "Compass helps South African business owners navigate digital transformation. Get technology consulting that drives real results. Talk to us today.",
  alternates: {
    canonical: "https://compass-landing.vercel.app/",
  },
  openGraph: {
    title: "Compass | Digital Transformation Consulting South Africa",
    description: "Compass helps South African business owners navigate digital transformation. Get technology consulting that drives real results. Talk to us today.",
    images: [
      {
        url: "https://compass-landing.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compass — Digital Transformation Consulting South Africa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

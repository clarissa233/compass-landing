import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass – Digital Transformation & Technology Consulting",
  description: "Compass helps business owners and executives in Jersey navigate digital transformation and technology consulting. Get in touch to start your project.",
  alternates: {
    canonical: "https://compass-landing.vercel.app/",
  },
  openGraph: {
    title: "Compass – Digital Transformation & Technology Consulting",
    description: "Compass helps business owners and executives in Jersey navigate digital transformation and technology consulting. Get in touch to start your project.",
    images: [
      {
        url: "https://compass-landing.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass – Find Your Direction, Reach Your Goals",
  description: "Compass helps you set clear goals, track your progress, and stay on course. Start your free account today and take control of where you're headed.",
  alternates: {
    canonical: "https://compass-landing.vercel.app/",
  },
  openGraph: {
    title: "Compass – Find Your Direction, Reach Your Goals",
    description: "Compass helps you set clear goals, track your progress, and stay on course. Start your free account today and take control of where you're headed.",
    images: [
      {
        url: "https://compass-landing.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compass – goal tracking and direction for your life",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axis Compass – Navigate Your World with Confidence",
  description: "Axis Compass helps you navigate your world with confidence. Discover tools, insights, and resources to find your direction and stay on course.",
  alternates: {
    canonical: "https://axiscompass.com/",
  },
  openGraph: {
    title: "Axis Compass – Navigate Your World with Confidence",
    description: "Axis Compass helps you navigate your world with confidence. Discover tools, insights, and resources to find your direction and stay on course.",
    images: [
      {
        url: "https://axiscompass.com/images/social-preview.jpg",
        width: 1200,
        height: 630,
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

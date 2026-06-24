import type { Metadata } from "next";
import "./globals.css";

// No meta description, no OG image, no Twitter card configured
export const metadata: Metadata = {
  title: "Axis Compass",
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

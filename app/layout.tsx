import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NPX Brand-works — Design. Develop. Elevate.",
  description:
    "NPX Brand-works builds logo & brand identities, web experiences, and digital products for teams who refuse to look generic.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

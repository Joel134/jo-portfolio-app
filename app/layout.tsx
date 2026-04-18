import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Joel John — Senior Mobile Developer",
  description:
    "Five years of Flutter and Android, shipped across multiple countries. Now exploring agentic development. Based in Chennai.",
  openGraph: {
    title: "Joel John",
    description:
      "Senior mobile developer shipping fintech across borders, exploring agents in Chennai.",
    url: "https://joeljohn.vercel.app",
    siteName: "Joel John",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel John",
    description:
      "Senior mobile developer shipping fintech across borders, exploring agents in Chennai.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://lindhoutbedrijfsgeneeskunde.nl"
  ),
  title: {
    default: "Arianne Lindhout Bedrijfsgeneeskunde",
    template: "%s | Arianne Lindhout Bedrijfsgeneeskunde",
  },
  description:
    "Geregistreerd bedrijfsarts voor begeleiding van ziekteverzuim, reïntegratie en preventie. Samen op weg naar gezondheid. Regio Utrecht.",
  keywords: [
    "bedrijfsarts",
    "bedrijfsgeneeskunde",
    "ziekteverzuim",
    "reïntegratie",
    "preventie",
    "arbodienst",
    "Utrecht",
    "Zeist",
    "PAGO",
    "PMO",
    "RI&E",
  ],
  authors: [{ name: "Arianne Lindhout" }],
  creator: "Arianne Lindhout",
  publisher: "Arianne Lindhout Bedrijfsgeneeskunde",
  openGraph: {
    title: "Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Geregistreerd bedrijfsarts voor begeleiding van ziekteverzuim, reïntegratie en preventie. Samen op weg naar gezondheid.",
    url: "/",
    siteName: "Arianne Lindhout Bedrijfsgeneeskunde",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arianne Lindhout Bedrijfsgeneeskunde",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Geregistreerd bedrijfsarts voor begeleiding van ziekteverzuim, reïntegratie en preventie.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${sourceSerif.variable} ${dmSans.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-slate-900`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

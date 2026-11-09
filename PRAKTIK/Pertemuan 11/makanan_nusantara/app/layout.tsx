import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makanan Nusantara — Cita Rasa Indonesia",
  description:
    "Makanan Nusantara menghadirkan hidangan khas Indonesia: mie goreng, nasi goreng, ketoprak, gado-gado, dan mie ayam dengan resep warisan dan bahan segar lokal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}

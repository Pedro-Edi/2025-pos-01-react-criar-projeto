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
  title: "Explorador React 🚀",
  description: "Projeto criado para a disciplina de POS no IFRN - CNAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-zinc-50 to-zinc-200 text-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}

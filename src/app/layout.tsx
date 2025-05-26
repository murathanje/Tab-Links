import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tabs Link Sharing",
  description: "Promotional website for the Tabs Link Sharing browser extension.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground relative overflow-x-hidden`}
      >       
        <Header />
        {/* New wrapper for scrollable content */}
        <div className="w-full flex-grow flex flex-col overflow-y-auto">
          <main className="w-full flex-grow px-4 py-12 relative z-10">
            {children}
          </main>
          <Footer className="relative z-10" />
        </div>
      </body>
    </html>
  );
}

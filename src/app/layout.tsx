import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

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
        {/* Unified background dot pattern */}
        <DotPattern
          variant="center"
          intensity="light"
          className={cn(
            "fixed inset-0 h-screen",
            "[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
          )}
        />
        
        <Header className="relative z-10" />
        <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl relative z-10">
          {children}
        </main>
        <Footer className="relative z-10" />
      </body>
    </html>
  );
}

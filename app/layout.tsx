import { WagmiAppProvider } from "@/providers/wagmi-provider";
import { ScrollProvider } from "@/animations/scroll-provider";
import { Italiana, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sapphire Cleaning Services",
  description: "Beyond Spotless Beautifully Sapphire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italiana.variable} ${inter.variable} antialiased`}>
        <ScrollProvider>
          <WagmiAppProvider>{children}</WagmiAppProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}

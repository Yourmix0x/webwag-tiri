import { ScrollProvider } from "@/animations/scroll-provider";
import { Inter, Orbitron } from "next/font/google";
import { AppLayout } from "@/layouts";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "webwag tiri - Web3 Wallet Dashboard with WAGMI & React",
  description:
    "webwag tiri is a sleek Web3 wallet dashboard built with WAGMI and React, offering seamless interaction with Ethereum blockchain. Connect your wallet, view balances, and manage your assets with ease.",
  keywords: ["Web3", "Blockchain", "WAGMI", "React"],
  authors: [{ name: "Yourmix0x" }],
  creator: "Yourmix0x",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased font-inter`}
      >
        <ScrollProvider>
          <Providers>
            <AppLayout>{children}</AppLayout>
          </Providers>
        </ScrollProvider>
      </body>
    </html>
  );
}

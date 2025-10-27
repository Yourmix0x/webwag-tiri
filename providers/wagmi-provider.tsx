"use client";
import { wagmiConfig } from "@/config/wagmi";
import { WagmiProvider } from "wagmi";

export function AppWagmiProvider({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}

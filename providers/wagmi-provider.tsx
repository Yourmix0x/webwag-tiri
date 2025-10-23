"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/config/wagmi";
import { WagmiProvider } from "wagmi";

export function WagmiAppProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

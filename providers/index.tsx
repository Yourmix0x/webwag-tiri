"use client";
import { type ReactNode } from "react";
import { AppWagmiProvider } from "./wagmi-provider";
import { AppQueryClientProvider } from "./query-client-provider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <AppWagmiProvider>
      <AppQueryClientProvider>{children}</AppQueryClientProvider>
    </AppWagmiProvider>
  );
}

export default Providers;
